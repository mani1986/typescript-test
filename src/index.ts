import Apple from './Apple';
import FruitBasket from './FruitBasket'

// The Apple Test
let AnApple = new Apple('green');
console.log(AnApple);

AnApple.takeBite()
console.log(AnApple);

console.log('-')


// Fruit Basket
const Basket = new FruitBasket()
Basket.addFruit(AnApple)
console.log('FruitBasket', Basket)

// Large number
const LARGE_NUMBER = 1_123_333_555_545
console.log('large number', LARGE_NUMBER)

// TypeGuards
// TODO