import $ from 'jquery';

export const domUpdates = {
 displayUserInformation(name, totalAmount) {
   $('.users-name-display').text(`Hello! ${name}!`)
   $('.users-total-display').text(`Total Amount Spent: ${totalAmount}`)
 },


 populateCards(recipesData) {
  return recipesData.forEach(recipe => {
    $('.all-cards').append('afterbegin', `<div id='${recipesData.id}'
    class='card'>
        <header id='${recipesData.id}' class='card-header'>
          <label for='add-button' class='hidden'>Click to add recipe</label>
          <button id='${recipesData.id}' aria-label='add-button' class='add-button card-button'>
            <img id='${recipesData.id} favorite' class='add'
            src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
            recipes to cook'>
          </button>
          <label for='favorite-button' class='hidden'>Click to favorite recipe
          </label>
          <button id='${recipesData.id}' aria-label='favorite-button' class='favorite favorite${recipesData.id} card-button'></button>
        </header>
          <span id='${recipesData.id}' class='recipe-name'>${recipesData.name}</span>
          <img id='${recipeesData.id}' tabindex='0' class='card-picture'
          src='${recipesData.image}' alt='click to view recipe for ${recipesData.name}'>
    </div>`)
  })
  // getFavorites();
},
}


export default domUpdates;
