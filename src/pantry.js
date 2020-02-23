import CookBook from "../src/cookbook"

class Pantry extends CookBook {
  constructor(ingredientsData, recipesData, usersPantry) {
    super(ingredientsData, recipesData)
    this.usersPantry = usersPantry;
  }

}

export default Pantry;
