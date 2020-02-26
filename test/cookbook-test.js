const chai = require("chai");
const expect = chai.expect;
import recipeData from '../src/data/recipes-test-data';
import ingredientData from '../src/data/ingredient-test-data';
import CookBook from '../src/cookbook';

let cookbook;

describe.only('CookBook', () => {
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

  it('should have a unique ID for each ingredient', () => {
    expect(cookbook.ingredientsData[0].id).to.equal(20081);
  })

  it('should have a cost in cents for each ingredient', () => {
    expect(cookbook.ingredientsData[0].estimatedCostInCents).to.equal(142);
  })

  it('should have a unique name for each ingredient', () => {
    expect(cookbook.ingredientsData[0].name).to.equal('wheat flour');
  })

  it('Should have an array of all recipes', () => {
    expect(cookbook.recipesData).to.be.an('array');
  });

  it('Should have a unique id for each recipe', () => {
    expect(cookbook.recipesData[0].id).to.equal(595736);
  });

  it('Should have a unique image link', () => {
    expect(cookbook.recipesData[0].image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('Should have a list of ingredients', () => {
    expect(cookbook.recipesData[0].ingredients.length).to.equal(11);
  });

  it('Should have a list of instructions', () => {
    expect(cookbook.recipesData[0].instructions.length).to.equal(6);
  });

  it('should have a unique name', () => {
    expect(cookbook.recipesData[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  })

  it('should have a list of tag names', () => {
    console.log(cookbook.recipesData[0].tags);
    expect(cookbook.recipesData[0].tags).to.deep.equal([
      'antipasti',
      'starter',
      'snack',
      'appetizer',
      'antipasto',
      "hor d'oeuvre"]);
  })

  describe('CookBook Methods', () => {

    it('Should be able to filter through its array ingredients tag or name', () => {
      expect(cookbook.findRecipe('snack').length).to.equal(9);
    });

    it('Should be able to calculate the cost for an ingredient', () => {
      expect(cookbook.calculateCost(recipeData)).to.equal('$6.23')
    })
  })
});
