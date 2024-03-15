abstract class Drink {
//fields
amount: number;
temperature: number;
hasIse: boolean

//constuction definision
constructor(inputAmount: number, inputTemperature: number, inputIce: boolean) {
    this.amount = inputAmount;
    this.temperature = inputTemperature;
    this.hasIse = inputIce;
}
}