import EdibleFruit from "./EdibleFruit";
import Fruit from './Fruit';

class Apple extends Fruit implements EdibleFruit {
    bitesTaken: number = 0

    takeBite () {
        this.bitesTaken += 1
    }

    __toString () : string {
        return `Bites taken ${this.bitesTaken}`
    }
}
export default Apple;
