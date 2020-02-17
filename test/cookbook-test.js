const chai = require("chai");
const expect = chai.expect;
import recipeData from '../src/data/recipes-test-data';
import ingredientData from '../src/data/ingredient-test-data';
import CookBook from '../src/cookbook';

let cookbook;

describe('Cook Book', () => {
  beforeEach(() => {
    cookbook = new CookBook(ingredientData, recipeData);
  });

  it('should be a function', () => {
    expect(CookBook).to.be.a('function');
  })

  it('should be an instance of a clue', () => {
    expect(cookbook).to.be.an.instanceof(CookBook);
  })

  it('Should have an array of all recipes', () => {
    expect(cookbook.ingredientsData).to.be.an('array');
  });

  it('Should have an array of all recipes', () => {
    expect(cookbook.recipesData).to.be.an('array');
  });

  // describe('findRecipe', () => {
  //   it('Should be able to filter through its array by ingredients', () => {
  //     expect(cookbook.findRecipe('yolk').length).to.equal(2);
  //   });
  //
  //   it('Should be able to filter through its array by name', () => {
  //     expect(cookbook.findRecipe('Sesame Cookies').length).to.equal(1);
  //   });
  // });
});
