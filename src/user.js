class Users {
  constructor(usersData, favoriteRecipes, tooCook) {
    this.usersData = usersData;
    this.favoriteRecipes = []
    this.toCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  addToCook(recipe) {
    if (!this.toCook.includes(recipe)) {
      this.toCook.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  removeToCook(recipe) {
    const i = this.toCook.indexOf(recipe);
    this.toCook.splice(i, 1)
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
