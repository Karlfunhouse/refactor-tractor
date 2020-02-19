// <<<<<<< HEAD
// class Users {
//   constructor(usersData) {
// =======
import CookBook from "../src/cookbook"

class Users extends CookBook {
  constructor(ingredientsData, recipesData, usersData) {
    super(ingredientsData, recipesData);
// >>>>>>> 091bbf912226c798745c81ba57ff82309f42b100
    this.usersData = usersData;
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }
}


export default Users;
