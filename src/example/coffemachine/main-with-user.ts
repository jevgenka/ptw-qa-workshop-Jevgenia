import * as readline from 'readline';
import {makeCappuccino, makeCocoa} from './service/coffee-machine';
import {Cappuccino} from './model/coffee/cappuccino'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptForDrink(): void {
  rl.question('Hello! What would you like to drink? Please choose - cappuccino, cocoa:  ', (input: string) => {
    console.log('Your drink choice is:', input);

    if (input == 'cappuccino') {
      const cappuccino: Cappuccino = makeCappuccino(true, false)
      const result = cappuccino.make()
      console.log(result)
    }

    if (input === "stop") {
      rl.close()
    } else {
      promptForDrink()
    }
  });
}
promptForDrink()