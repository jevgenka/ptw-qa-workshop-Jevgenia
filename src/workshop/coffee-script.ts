//variables

const MY_NAME: string = 'Jevgenia';
let myMilkAmount: number = 50;
let myCoffeeType: string = 'cappuccino';

console.log(`Hello, ${MY_NAME}! Your coffe is ${myCoffeeType} and it has ${myMilkAmount} ml.`)
console.log('Hello, ' + MY_NAME + '! Your coffe is ' + myCoffeeType + ' and it has ' + myMilkAmount + ' ml.')

//conditions

if (isTooMuchMilk()) {
    console.log(muchMilkString() + muchMilkResult(true));
} else if (myMilkAmount >= 100) {
    console.log(muchMilkString() + muchMilkResult(false));
} else if (myCoffeeType === 'cappuccino') {
    console.log('Perfect choise');
} else {
    console.log('All good, making coffee for you...');
}

//fincions
function isTooMuchMilk(): boolean {
    return myMilkAmount > 50 && myCoffeeType !== 'latte'
};

function muchMilkString(): string {
    return 'Too much milk'
}

function muchMilkResult(isNotRealCoffee: boolean): string {
    if (isNotRealCoffee) {
        return 'for othwer cofee types'
    }
    return ', not a real coffee'
}