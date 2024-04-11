// How to find the 2 ^ n ? where n is the input.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What's your power of the number?\n`, power => {

    // using loop
    let num = 2;
    for (let i = 1; i < power; i++) {
        num = num * 2;
    }
    console.log("using for loop")
    console.log(`power of the number is ${num}`)

    //using Math.pow() method
    console.log("using Math.pow() method")
    console.log(Math.pow(2, power))

    //using exponentiation operator
    console.log("using exponentiation method")
    console.log(2 ** power)

    rl.close();
});

