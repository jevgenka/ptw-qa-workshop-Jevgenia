import { Drink } from './drink';
import { SyrupType } from '../enum/syrup-type';

class Coffee extends Drink {

    amountOfMilk: number;
    hasSyrup: boolean; 
    syrupAmount: number;
    syrupType: SyrupType;

    constructor (inputAmount: number,
        inputTemperature: number,
        inputIce: boolean,
        inputMilk: number,
        inputHasSyrup: boolean,
        inputSyrupAmount: number,
        inputSyrupType: SyrupType) {
        super(inputAmount, inputTemperature, inputIce);
        this.amountOfMilk = inputMilk;
        this.checkSyrup(inputHasSyrup, inputSyrupAmount, inputSyrupType);
    }

    private checkSyrup(inputHasSyrup: boolean, inputSyrupAmount: number, inputSyrupType: SyrupType): void {
        if (inputHasSyrup && inputSyrupAmount < 1 || !inputHasSyrup && inputSyrupAmount > 0) {
            console.log('NO SYRUP.. NO COFFEE!!!');
            this.hasSyrup = false;
            this.syrupAmount = 0;
            this.syrupType = null;
        } else if (inputHasSyrup && inputSyrupAmount > 0) {
            this.hasSyrup = inputHasSyrup;
            this.syrupAmount = inputSyrupAmount;
            this.syrupType = inputSyrupType;
            console.log(`Your ${inputSyrupType} is ready!`)
        }
    }
}
const coffee = new Coffee(50, 60, false, 10, true, 0, SyrupType.AMARETTO);