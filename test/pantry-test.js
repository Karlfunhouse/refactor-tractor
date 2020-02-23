const chai = require("chai");
const expect = chai.expect;
import recipesData from '../src/data/recipes-test-data';
import ingredientsData from '../src/data/ingredient-test-data';
import usersData from '../src/data/users-test-data';
import Users from '../src/user';
import CookBook from '../src/cookbook';
import Pantry from '../src/pantry';

let pantry;

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(ingredientsData, recipesData, usersData[0].pantry);

  });

    it('should be a function', () => {
      expect(Pantry).to.be.a('function');
    });

    it('should be an instance of Users', () => {
      expect(pantry).to.be.an.instanceof(Pantry);

})

})
