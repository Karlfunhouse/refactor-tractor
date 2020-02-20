import $ from 'jquery';

export const domUpdates = {

 greetUser(usersData) {
   $('.user-name').text(`${usersData.usersData.name}`);
 },

 populateCards(cookBook) {
  return cookBook.recipesData.forEach(recipe => {
    $('.all-cards').append(`<div id='${recipe.id}'
    class='card'>
        <header id='${recipe.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
            <img id='${recipe.id} favorite' class='add'
            src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
            recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe
          </label>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${cookBook.recipesData.id} card-button'></button>
        </header>
          <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
          <img id='${recipe.id}' tabindex='0' class='card-picture'
          src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
    </div>`)
  })
  // getFavorites();
},

//   populateRecipeInfo(cookBook, calculateCost) {
//     $('.all-cards').append(`<h3>${cookBook.recipeData.name}</h3>
//     <p class='all-recipe-info'>
//     <strong>It will cost: </strong><span class='cost recipe-info'>
//     $${calculateCost}</span><br><br>
//     <strong>You will need: </strong><span class='ingredients recipe-info'></span>
//     <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
//     </span></ol>
//     </p>`)
// },
//
//  populateIngredientsNeeded(cookBook){
//     return cookBook.ingredientsData.forEach(ingredient => {
//       $('.ingredients').append('afterbegin', `<ul><li>
//       ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
//       ${ingredient.name}</li></ul>`)
//   })
//     return cookBook.recipeData.forEach(recipeInstruction => {
//       $('.instructions').append('beforebegin', `<li>
//       ${recipeInstruction.instruction}</li>`)
//   }))
// },
}


export default domUpdates;
