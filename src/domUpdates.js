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

  populateRecipeInfo(cookBook, calculateCost) {
    // console.log('made-it')
    return cookBook.recipesData.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        console.log(recipe)
        // return recipe;
      }
    })
    // $('.all-cards').addClass('all');
    $('.all-cards').append(`<h3>${cookBook.recipesData.name}</h3>
    <p class='all-recipe-info'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${calculateCost}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`)
},

//  populateIngredientsNeeded(cookBook){
//    let ingredientsSpan = $('.ingredients');
//    let instructionsSpan = $('.instructions');
//     return cookBook.ingredientsData.forEach(ingredient => {
//       ingredientsSpan.append( `<ul><li>
//       ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
//       ${ingredient.name}</li></ul>`)
//   })
//     return cookBook.recipesData.forEach(recipeInstruction => {
//       instructionsSpan.append( `<li>
//       ${recipeInstruction.instruction}</li>`)
//   }))
// },
//
// function displayDirections(event) {
//   let newRecipeInfo = cookbook.recipes.find(recipe => {
//     if (recipe.id === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
//   let cost = recipeObject.calculateCost()
//   let costInDollars = (cost / 100).toFixed(2)
//   cardArea.classList.add('all');
//   cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
//   <p class='all-recipe-info'>
//   <strong>It will cost: </strong><span class='cost recipe-info'>
//   $${costInDollars}</span><br><br>
//   <strong>You will need: </strong><span class='ingredients recipe-info'></span>
//   <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
//   </span></ol>
//   </p>`;
//   let ingredientsSpan = document.querySelector('.ingredients');
//   let instructionsSpan = document.querySelector('.instructions');
//   recipeObject.ingredients.forEach(ingredient => {
//     ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
//     ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
//     ${ingredient.name}</li></ul>
//     `)
//   })
//   recipeObject.instructions.forEach(instruction => {
//     instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
//     ${instruction.instruction}</li>
//     `)
//   })
// }

}


export default domUpdates;
