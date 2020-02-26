import $ from 'jquery';
import CookBook from './cookbook';


export const domUpdates = {

 greetUser(usersData) {
   $('.user-name').text(`${usersData.usersData.name}`);
 },

 populateIngredients(cookBook){
    return  cookBook.recipesData.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        $('.ingredients').append( `<ul><li>
        ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        </li></ul>`)
      })
  })
},

  populateInstructions(cookBook) {
    return cookBook.recipesData.forEach(recipe => {
      recipe.instructions.forEach(ingredient => {
      $('.instructions').append( `<li>
      ${ingredient.instruction}</li>`)
    })
  })
},

 populateCards(cookBook) {
  return cookBook.recipesData.forEach(recipe => {
    $('.all-cards').append(`<div id='${recipe.id}'
    class='card'>
        <header id='${recipe.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipe.id}' aria-label='add-button' class='favorite-button add-button to-cook-button'>
            <img id='${recipe.id} favorite' class='add'
            src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
            recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe
          </label>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite  ${recipe.id} card-button'></button>
        </header>
          <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
          <img id='${recipe.id}' tabindex='0' class='card-picture'
          src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
    </div>`)
  })
  // getFavorites();
},

  populateRecipeInfo(cookBook, calculateCost) {
    let recipeInfo = cookBook.recipesData.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    $('.all-cards').empty();
    $('.all-cards').append(`<h3>${recipeInfo.name}</h3>
    <p class='all-recipe-info'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${calculateCost}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`)

    this.populateInstructions(cookBook)
    this.populateIngredients(cookBook)
},

populateFavorites(user) {
 return user.favoriteRecipes.forEach(recipe => {
   $('.all-cards').append(`<div id='${recipe.id}'
   class='card'>
       <header id='${recipe.id}' class='card-header'>
         <label for='add-button' class='hidden'>Click to add recipe</label>
         <button id='${recipe.id}' aria-label='add-button' class='favorite-button add-button to-cook-button'>
           <img id='${recipe.id} favorite' class='add'
           src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
           recipes to cook'>
         </button>
         <label for='favorite-button' class='hidden'>Click to favorite recipe
         </label>
         <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active ${recipe.id} card-button'></button>
       </header>
         <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
         <img id='${recipe.id}' tabindex='0' class='card-picture'
         src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
   </div>`)
 })
 // getFavorites();
},

populateSearchedRecipes(foundRecipes) {
 return foundRecipes.forEach(recipe => {
   $('.all-cards').append(`<div id='${recipe.id}'
   class='card'>
       <header id='${recipe.id}' class='card-header'>
         <label for='add-button' class='hidden'>Click to add recipe</label>
         <button id='${recipe.id}' aria-label='add-button' class='favorite-button add-button to-cook-button'>
           <img id='${recipe.id} favorite' class='add'
           src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
           recipes to cook'>
         </button>
         <label for='favorite-button' class='hidden'>Click to favorite recipe
         </label>
         <button id='${recipe.id}' aria-label='favorite-button' class='favorite  ${recipe.id} card-button'></button>
       </header>
         <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
         <img id='${recipe.id}' tabindex='0' class='card-picture'
         src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
   </div>`)
 })
 // getFavorites();
},
}

export default domUpdates;
