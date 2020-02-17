class CookBook {
  constructor(ingredientsData, recipesData) {
    this.ingredientsData = ingredientsData;
    this.recipesData = recipesData;
  }

  // findRecipe(searchText) {
  //   return this.recipes.filter(recipe => {
  //     return recipe.ingredients.find(ingredient => {
  //       return (ingredient.name.includes(searchText)) ||
  //       (recipe.name.includes(searchText))
  //     });
  //   })
  // }
}

export default CookBook;
