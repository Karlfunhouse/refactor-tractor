import CookBook from "../src/cookbook"

class Pantry extends CookBook {
  constructor(ingredientsData, recipesData, usersPantry) {
    super(ingredientsData, recipesData)
    this.usersPantry = usersPantry;
  }

  // Determine whether my pantry has enough ingredients to cook a given meal
  getIngredientNames() {
    // console.log(this.ingredientsData);
    //iterate over ingredientsData and iterate over pantry ingredients list and compare ingredient.id to pantry.id and return ingredient.name
    return this.ingredientsData.reduce((ingredientList, ingredient) => {
     let matchingIngredients = this.usersPantry.filter(pantryIngredient => {
        if(pantryIngredient.ingredient === ingredient.id) {
        ingredientList.push(ingredient.name)
        }
      })
      return ingredientList
    }, [])
  };

  // Determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry

  // Remove the ingredients used for a given meal from my pantry, once that meal has been cooked (only applicable if users have a list of mealsToCook; can be considered a stretch goal)





}

export default Pantry;
