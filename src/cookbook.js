class CookBook {
  constructor(ingredientsData, recipesData) {
    this.ingredientsData = ingredientsData;
    this.recipesData = recipesData;
  }

  findRecipe(searchText){
    let searchResult = this.recipesData.reduce((searchedRecipes, recipe) => {
      if (recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
      recipe.tags.includes(searchText.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
      return searchedRecipes;
  }, [])
  return searchResult.length;
  }

   calculateCost(){
    // console.log(this.recipesData)
      let costForRecipe = this.recipesData.reduce((counter, ingredient) => {
        return this.ingredientsData.find(specificIngredient => {
          if (specificIngredient.id === ingredient.id) {
            return costCounter += (Number(specificIngredient.estimatedCostInCents) *
            Number(ingredient.quantity.amount))
          }
        })
        return counter
      }, 0);
      return costForRecipe;
    }

    // calculateCost() {
    //   let dollars = this.ingredientsData.estimatedCostInCents / 100;
    //   return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    // }
  }

export default CookBook;
