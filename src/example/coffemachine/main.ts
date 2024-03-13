import {makeCappuccino, makeCocoa} from './service/coffee-machine';
import {Cappuccino} from './model/coffee/cappuccino'
import {Cocoa} from './model/cocoa'


if (CoffeeUtil.isCleaningInProgress()) {
  console.log("Cleaning in progress, cannot make coffee!")
}

const cocoa: Cocoa = makeCocoa(true, false);
console.log(cocoa);

const cappuccino: Cappuccino = makeCappuccino(true, false)
const result = cappuccino.make()
console.log(result)

