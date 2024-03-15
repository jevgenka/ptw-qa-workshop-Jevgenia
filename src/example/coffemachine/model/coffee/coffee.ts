import {Drink} from '../drink'

export class Coffee extends Drink {
  amountOfMilk: number;
  hasSyrup: boolean;

  constructor(hasIce: boolean, hasSyrup: boolean, amountOfMilk: number, amount: number) {
    super(hasIce, amount);
    this.hasSyrup = hasSyrup;
    this.amountOfMilk = amountOfMilk;
  }

  make(): string {
    // super.make() -> calls parent make()
    if (this.amountOfMilk > this.amount) {
      return 'Too much milk, please retry!'
    } else if (this.amountOfMilk == this.amount) {
      return 'Preparing a glass of milk.'
    }
    return this.makeCoffee()
  }

  private makeCoffee(): string {
    // look how can we optimize that and eliminate string repetitions
    if (this.hasSyrup && this.hasIce) {
      return `Preparing iced coffee ${this.amount} ml with ${this.amountOfMilk} ml with syrup.`
    } else if (this.hasIce) {
      return `Preparing iced coffee ${this.amount} ml with ${this.amountOfMilk} ml.`
    } else if (this.hasSyrup) {
      return `Preparing coffee ${this.amount} ml with ${this.amountOfMilk} ml with syrup.`
    }
  }

}