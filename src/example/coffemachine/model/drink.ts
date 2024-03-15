export abstract class Drink {
  amount: number;
  hasIce: boolean;

  protected constructor(hasIce: boolean, amount: number) {
    this.hasIce = hasIce;
    this.amount = amount;
  }

  make(): string {
    let result: string = `Making simple drink ${this.amount} ml`
    if (this.hasIce) {
      result += " with ice."
    } else {
      result += "."
    }
    return result
  }
}