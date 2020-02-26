const chai = require("chai");
const expect = chai.expect;
import usersData from '../src/data/users-test-data';
import recipesData from '../src/data/recipes-test-data';

import Users from '../src/user';


let users

describe('Users', () => {
  beforeEach(() => {
    users = new Users(usersData);

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

  it('Should have an array to push favorites into an array', () => {
    expect(users.favoriteRecipes.length).to.eql(0);
  });

  it('Should have an array to push meals into an array', () => {
    expect(users.toCook.length).to.eql(0);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    users.addToFavorites(recipesData[0])
    expect(users.favoriteRecipes.includes(recipesData[0])).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    users.removeFromFavorites(recipesData);
    expect(users.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    users.addToCook(recipesData[0])
    expect(users.toCook.includes(recipesData[0])).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    users.removeToCook(recipesData);
    expect(users.toCook).to.eql([]);
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
});
