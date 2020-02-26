import './css/styles.scss';

import domUpdates from './domUpdates';
import CookBook from './cookbook';
import Pantry from './pantry';
import Users from './user';
import $ from 'jquery';

let currentUser;
let cookBook;
let currentUsersPantry;
let usersData;
let ingredientsData;
let recipesData
let favorites = [];
let searchedList = [];
let toCook = [];
let searchValue = $('#search-input');

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
    cookBook = new CookBook(ingredientsData, recipesData, searchedList);
    currentUser = new Users(usersData[0], favorites, toCook)
    currentUsersPantry = new Pantry(ingredientsData, recipesData, usersData[0].pantry)
    onStartUp()
    $('.all-cards').click(cardButtonConditionals);
    $('#home-button').click(homeButtonHandler);
    $('#view-favorites-button').click(viewFavoritesHandler);
    $('#view-to-cook-button').click(viewToCookHandler);
    $('.favorite').click(favoriteRecipe);
    $('#search-button').click(searchHandler);
    $('.add').click(cookMe);
    searchValue;
    $('.to-cook-button').click(cookMe);
    $('#pantry-button').click(viewPantryHandler);

  })
  .catch(error => {console.log('Something is amiss with promise all', error)});


function onStartUp() {
  domUpdates.greetUser(currentUser);
  domUpdates.populateCards(cookBook);
  }

const cardButtonConditionals = (event)  => {
    if (event.target.classList.contains('card-picture')) {
      recipeHandler();
    }
  }

const homeButtonHandler = (event) => {
  $('.all-cards').empty();
    domUpdates.populateCards(cookBook);
}

const viewPantryHandler = () => {
  $('.all-cards').empty();
  console.log(currentUsersPantry)
  domUpdates.showUsersPantry(currentUsersPantry.getIngredientNames())
}

const viewFavoritesHandler = () => {
  $('.all-cards').empty();
  domUpdates.populateFavorites(currentUser);
}

const viewToCookHandler = () => {
  $('.all-cards').empty();
    domUpdates.populateToCook(currentUser);
}

const searchHandler = () => {
  event.preventDefault()
  $('.all-cards').empty();
  let searchedList = cookBook.findRecipe(searchValue.val());
  domUpdates.populateSearchedRecipes(searchedList);
}

const favoriteRecipe = (event) => {
  let specificRecipe = cookBook.recipesData.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      $(`.${recipe.id}`).addClass('favorite-active');
      return recipe;
    }
  })
  currentUser.addToFavorites(specificRecipe);
}

const cookMe = (event) => {

  let letscook = cookBook.recipesData.find(recipe => {
  return recipe.id === parseInt(event.target.id)
  })

  currentUser.addToCook(letscook);

}

const recipeHandler = () => {
  domUpdates.populateRecipeInfo(cookBook, cookBook.calculateCost(cookBook.recipesData));
 }

const shuffleUser = (array) => {
    array.sort(() => Math.random() - 0.5);
 }

// const toggleFavoriteHelper = (specificRecipe) => {
//   if (event.target.classList.contains('favorite-active')) {
//     event.target.classList.remove('favorite-active');
//   }
//   currentUser.removeFromFavorites(specificRecipe);
// }



// const unFavoriteRecipe = (event) => {
//   console.log('unfavorite')
//   return specificRecipe = cookBook.recipesData.find(recipe => {
//     if (recipe.id  === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   currentUser.removeFromFavorites(specificRecipe);
//   console.log(currentUser)
// }


// function favoriteCard(event) {
//   let specificRecipe = cookbook.recipes.find(recipe => {
//     if (recipe.id  === Number(event.target.id)) {
//       return recipe;
//     }
//   })
//   if (!event.target.classList.contains('favorite-active')) {
//     event.target.classList.add('favorite-active');
//     favButton.innerHTML = 'View Favorites';
//     user.addToFavorites(specificRecipe);
//   } else if (event.target.classList.contains('favorite-active')) {
//     event.target.classList.remove('favorite-active');
//     user.removeFromFavorites(specificRecipe)
//   }
// }
//
