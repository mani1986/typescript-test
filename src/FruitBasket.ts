import Fruit from './Fruit';

class FruitBasket {
  fruits: Fruit[] = []

  addFruit (fruit: Fruit) {
    this.fruits.push(fruit)
  }
}

export default FruitBasket
