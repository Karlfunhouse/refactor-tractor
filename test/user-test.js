const chai = require("chai");
const expect = chai.expect;
import recipesData from '../src/data/recipes-test-data';
import ingredientsData from '../src/data/ingredient-test-data';
import usersData from '../src/data/users-test-data';
import Users from '../src/user';


let users

describe('Users', () => {
  beforeEach(() => {
    users = new Users(ingredientsData, recipesData, usersData);

  });

  it('should be a function', () => {
    expect(Users).to.be.a('function');
  });

  it('should be an instance of Users', () => {
    expect(users).to.be.an.instanceof(Users);
  });

  it('Should have a unique id', () => {
    expect(users.usersData[0].id).to.eql(1);
  });

  it('Should have a unique name', () => {
    expect(users.usersData[0].name).to.eql("Saige O'Kon");
  });

  it('Should have a pantry', () => {
    expect(users.usersData[0].pantry.length).to.eql(52);
  });


  it.skip('Should be able to add recipes to favoriteRecipes', () =>{
    user.addToFavorites(recipeData[0])
    expect(user.favoriteRecipes.includes(recipeData[0])).to.eql(true);
  });

  it.skip('Should be able to remove recipes from favoriteRecipes', () =>{
    user.removeFromFavorites(recipeData);
    expect(user.favoriteRecipes).to.eql([]);
  });

  it.skip('Should be able to filter through favoriteRecipes by tag', () => {
    user.addToFavorites(recipeData[0]);
    user.addToFavorites(recipeData[1]);
    expect(user.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it.skip('Should be able to search favoriteRecipes by name or ingredient', () => {
    user.addToFavorites(recipeData[0]);
    user.addToFavorites(recipeData[1]);
    expect(user.findFavorites('egg')).to.eql([recipeData[0]]);
  });

  it.skip('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    expect(user.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it.skip('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
