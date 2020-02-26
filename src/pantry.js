import CookBook from "../src/cookbook"

class Pantry extends CookBook {
  constructor(ingredientsData, recipesData, usersPantry) {
    super(ingredientsData, recipesData)
    this.usersPantry = usersPantry;
  }

  // Determine whether my pantry has enough ingredients to cook a given meal
  getIngredientNames() {
    return this.ingredientsData.reduce((ingredientList, ingredient) => {
     let matchingIngredients = this.usersPantry.filter(pantryIngredient => {
        if(pantryIngredient.ingredient === ingredient.id) {
        ingredientList.push({name: ingredient.name, amount: pantryIngredient.amount})
        }
      })
      return ingredientList
    }, [])
  };


  checkIngredientSupply() {
      const recipeIngredients = this.recipesData[0].ingredients;
      const pantry = this.usersPantry;
      return recipeIngredients.map(recipeIngredient => {
        const thePantryItem = pantry.find(pantryItem => pantryItem.ingredient === recipeIngredient.id)
    if (!thePantryItem) {
      console.log(`item not in pantry, go buy ${recipeIngredient.quantity.amount} ${recipeIngredient.quantity.unit}s of ${recipeIngredient.name}`);
      return `item not in pantry, go buy ${recipeIngredient.quantity.amount} ${recipeIngredient.quantity.unit}s of ${recipeIngredient.name}`;

    } else if (thePantryItem.amount >= recipeIngredient.quantity.amount) {
      console.log(`Let's get cookin!`);
      return `Let's get cookin!`;

    } else {
      let deficit = recipeIngredient.quantity.amount - thePantryItem.amount
      console.log(`You need ${deficit} more ${recipeIngredient.quantity.unit} of ${recipeIngredient.name}`);
      return `You need ${deficit} more ${recipeIngredient.quantity.unit} of ${recipeIngredient.name}`
      }
    })
  }
}

export default Pantry;
