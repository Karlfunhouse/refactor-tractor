class CookBook {
  constructor(ingredientsData, recipesData, searchedList) {
    this.ingredientsData = ingredientsData;
    this.recipesData = recipesData;
    this.searchedList = [];

  }

  findRecipe(searchText){
    let searchResult = this.recipesData.reduce((searchedRecipes, recipe) => {
      if (recipe.name.includes(searchText.toLowerCase()) ||
      recipe.tags.includes(searchText.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
      return searchedRecipes;
  }, [])
  return searchResult;
  }

   calculateCost(recipe) {
   let dollars = this.ingredientsData.reduce((counter, ingredient) => {
    let matchingIngredients = recipe.filter(recipeIngredient => {
      recipeIngredient.ingredients.forEach(item => {
        if(item.id === ingredient.id) {
          counter += ingredient.estimatedCostInCents;
        }
      })
     })
     return counter / 100;
   }, 0)
   return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
 };
  }

export default CookBook;
