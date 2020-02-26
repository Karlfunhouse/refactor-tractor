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
      // console.log(searchedRecipes)
      return searchedRecipes;
  }, [])
  // console.log(searchResult)
  return searchResult;
  }

   // calculateCost(){
   //    let costForRecipe = this.recipesData.reduce((counter, ingredient) => {
   //      return this.ingredientsData.find(specificIngredient => {
   //        if (specificIngredient.id === ingredient.id) {
   //          return costCounter += (Number(specificIngredient.estimatedCostInCents) *
   //          Number(ingredient.quantity.amount))
   //        }
   //      })
   //      console.log(counter)
   //      return counter
   //    }, 0);
   //    return costForRecipe;
   //  }

   calculateCost() {
   let dollars = this.ingredientsData.reduce((counter, ingredient) => {
    let matchingIngredients = this.recipesData.filter(recipeIngredient => {
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
