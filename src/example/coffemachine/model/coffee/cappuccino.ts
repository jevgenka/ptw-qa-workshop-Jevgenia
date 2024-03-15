import {Coffee} from './coffee'

export class Cappuccino extends Coffee {
  amountOfFoam: number;

  constructor(amountOfFoam: number, hasIce: boolean, hasSyrup: boolean, amountOfMilk: number, amount: number) {
    super(hasIce, hasSyrup, amountOfMilk, amount);
    this.amountOfFoam = amountOfFoam;
  }

  make(): string {
    let result: string = super.make();
    this.doFoam()
    result += " Cappuccino is ready."
    return result
  }

  private doFoam(): void {
    for (let foamingStep = 1; foamingStep <= this.amountOfFoam ; foamingStep++) {
      console.log(`Foaming ${foamingStep}...`)
    }
  }
}