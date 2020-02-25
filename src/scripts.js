import './css/base.scss';
import './css/styles.scss';

import domUpdates from './domUpdates'
import CookBook from './cookbook';
import Pantry from './pantry'
import Users from './user'
import $ from 'jquery';

let currentUser;
let cookBook;
let currentUsersPantry;
let usersData;
let ingredientsData;
let recipesData
// let favButton = $('.view-favorites');
// let homeButton = $('.home')
// let cardArea = $('.all-cards');
let favorites = [];

// homeButton.addEventListener('click', cardButtonConditionals);
// favButton.addEventListener('click', viewFavorites);
// cardArea.addEventListener('click', cardButtonConditionals);
// $('.view-favorites').click(viewFavorites);
// $('.all-cards').click(cardButtonConditionals);

const userData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
  .then(response => response.json())
  .then(data => data.wcUsersData)
  .catch(error => console.log('usersData error'));

const ingredientData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
  .then(ingredientsResponse => ingredientsResponse.json())
  .then(data => data.ingredientsData)
  .catch(error => console.log('ingredientsData error'));

const recipeData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
  .then(recipesResponse => recipesResponse.json())
  .then(data => data.recipeData)
  .catch(error => console.log('recipesData error'));

Promise.all([recipeData, ingredientData, userData])
  .then(data => {
    recipesData = data[0];
    ingredientsData = data[1];
    usersData = data[2];
  })
  .then(() => {
    shuffleUser(usersData);
    cookBook = new CookBook(ingredientsData, recipesData);
    currentUser = new Users(usersData[0], favorites)
    currentUsersPantry = new Pantry(usersData[0].pantry)
    onStartUp()
    $('.all-cards').click(cardButtonConditionals);
    $('#home-button').click(homeButtonHandler);
    $('#view-favorites-button').click(viewFavoritesHandler);
    $('.favorite').click(favoriteRecipe);
    // $('.unfavorite').click(unFavoriteRecipe);
    $('.to-cook-button').click(addToCook);
  })
  .catch(error => {console.log('Something is amiss with promise all', error)});



function onStartUp() {
  // if (!user.favoriteRecipes.length) {
  //     favButton.innerHTML = 'You have no favorites!';
  //     populateCards(cookbook.recipes);
  //     return
  //   } else {
  // if ($('.all-cards')hasClass('all')) {
  //   $('.all-cards').removeClass('all')
  // }
    domUpdates.greetUser(currentUser);
    domUpdates.populateCards(cookBook);
  }

const  cardButtonConditionals = (event)  => {
    // if (event.target.classList.contains('favorite')) {
    //   favoriteCard(event);
    // } else
    if (event.target.classList.contains('card-picture')) {
      recipeHandler();
    }
  }

const homeButtonHandler = (event) => {
  $('.all-cards').empty();
    domUpdates.populateCards(cookBook);
}

const viewFavoritesHandler = () => {
  $('.all-cards').empty();
  domUpdates.populateFavorites(currentUser)

}

const favoriteRecipe = (event) => {
  console.log('favorite')
  let specificRecipe = cookBook.recipesData.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      // $(recipe.id).css('background-color', 'red');
      return recipe;
    }
  })
  currentUser.addToFavorites(specificRecipe);
  console.log(currentUser)
}

// const unFavoriteRecipe = (event) => {
//   console.log('unfavorite')
//   let specificRecipe = cookBook.recipesData.find(recipe => {
//     if (recipe.id  === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   currentUser.removeFromFavorites(specificRecipe);
//   console.log(currentUser)
// }

const addToCook = () => {
  console.log('to-cook')
}

const recipeHandler = () => {
  // console.log(cookBook.calculateCost())
  // , cookBook.calculateCost()
  domUpdates.populateRecipeInfo(cookBook);
 }

const shuffleUser = (array) => {
    array.sort(() => Math.random() - 0.5);
 }





// function viewFavorites() {
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   if (!user.favoriteRecipes.length) {
//     favButton.innerHTML = 'You have no favorites!';
//     populateCards(cookbook.recipes);
//     return
//   } else {
//     favButton.innerHTML = 'Refresh Favorites'
//     cardArea.innerHTML = '';
//     user.favoriteRecipes.forEach(recipe => {
//       cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//       class='card'>
//       <header id='${recipe.id}' class='card-header'>
//       <label for='add-button' class='hidden'>Click to add recipe</label>
//       <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//       <img id='${recipe.id}' class='add'
//       src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//       recipes to cook'></button>
//       <label for='favorite-button' class='hidden'>Click to favorite recipe
//       </label>
//       <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
//       </button></header>
//       <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//       <img id='${recipe.id}' tabindex='0' class='card-picture'
//       src='${recipe.image}' alt='Food from recipe'>
//       </div>`)
//     })
//   }
// }
//
// function greetUser() {
//   const userName = document.querySelector('.user-name');
//   userName.innerHTML =
//   user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
// }
//
function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromFavorites(specificRecipe)
  }
}
//

//
//

// function getFavorites() {
//   if (user.favoriteRecipes.length) {
//     user.favoriteRecipes.forEach(recipe => {
//       document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
//     })
//   } else return
// }
//
// function populateCards(recipes) {
//   cardArea.innerHTML = '';
//   if (cardArea.classList.contains('all')) {
//     cardArea.classList.remove('all')
//   }
//   recipes.forEach(recipe => {
//     cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
//     class='card'>
//         <header id='${recipe.id}' class='card-header'>
//           <label for='add-button' class='hidden'>Click to add recipe</label>
//           <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
//             <img id='${recipe.id} favorite' class='add'
//             src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
//             recipes to cook'>
//           </button>
//           <label for='favorite-button' class='hidden'>Click to favorite recipe
//           </label>
//           <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
//         </header>
//           <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
//           <img id='${recipe.id}' tabindex='0' class='card-picture'
//           src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
//     </div>`)
//   })
//   getFavorites();
// };
