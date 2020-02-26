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
      // console.log(this.ingredientsData[0].estimatedCostInCents)
      let dollars = this.ingredientsData[0].estimatedCostInCents / 100;
      return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }
    // calculateCost() {
    //   let calculateRecipe = this.recipesData.reduce((counter, recipe) => {
    //       return recipe.ingredients.filter(ingredient => {
    //         console.log(ingredient.id)
    //         if(ingredient.id.includes(this.ingredientData)){
    //           console.log('made-it')
    //         }
    //       })
    //     return counter
    //   }, 0)
    //   // let dollars = this.ingredientsData.estimatedCostInCents / 100;
    //   // return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    // }
  }

export default CookBook;
