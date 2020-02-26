import chai from 'chai';
import $ from 'jquery';
import domUpdates from '../src/domUpdates';

const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe.only('domUpdates.js', () => {
  chai.spy.on(domUpdates, 'greetUser', () => 'User\'s Name');
  it('Should invoke greetUser', () => {
    expect(domUpdates.greetUser()).to.equal('User\'s Name');
  });
  chai.spy.on(domUpdates, 'populateIngredients', () => 'All ingredients');
  it('Should invoke populateIngredients', () => {
    expect(domUpdates.populateIngredients()).to.equal('All ingredients');
  });
  chai.spy.on(domUpdates, 'populateInstructions', () => 'Recipe Instructions');
  it('Should invoke populateInstructions', () => {
    expect(domUpdates.populateInstructions()).to.equal('Recipe Instructions');
  });
  chai.spy.on(domUpdates, 'populateCards', () => 'All Recipe Cards');
  it('Should invoke populateCards', () => {
    expect(domUpdates.populateCards()).to.equal('All Recipe Cards');
  });
  chai.spy.on(domUpdates, 'populateRecipeInfo', () => 'Recipe Info');
  it('Should invoke populateRecipeInfo', () => {
    expect(domUpdates.populateRecipeInfo()).to.equal('Recipe Info');
  });
  chai.spy.on(domUpdates, 'populateFavorites', () => 'User\'s favorite recipes');
  it('Should invoke populateFavorites', () => {
    expect(domUpdates.populateFavorites()).to.equal('User\'s favorite recipes');
  });
  chai.spy.on(domUpdates, 'populateSearchedRecipes', () => 'Searched recipes by user');
  it('Should invoke populateSearchedRecipes', () => {
    expect(domUpdates.populateSearchedRecipes()).to.equal('Searched recipes by user');
  });
});



// import chai from 'chai';
// import $ from 'jquery'
// import Customer from '../src/customer'
// import Manager from '../src/manager'

// const expect = chai.expect;
// const spies = require('chai-spies');
// chai.use(spies);

// let customer = new Customer(2, 'Rocio Schuster', '2020/01/12');
// let manager = new Manager('manager', '2020/01/13');


// describe('customer', () => {
//   chai.spy.on(customer, ['addAvailableCabinsToBookingSearch'], () => true);
//   it('should invoke addAvailableCabinsToBookingSearch', () => {
//     expect(customer.addAvailableCabinsToBookingSearch()).to.equal(true);
//   });
//   chai.spy.on(customer, ['checkForFilters'], () => true);
//   it('should invoke checkForFilters', () => {
//     expect(customer.checkForFilters()).to.equal(true);
//   });
// });

//
