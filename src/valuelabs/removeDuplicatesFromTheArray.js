// How to remove the duplicates from the array.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var nums = [];

function removeDuplicates(nums) {
    return nums.filter((item,
        index) => nums.indexOf(item) === index);
}

rl.on("line", line => {
    let newLine = line.split(" ");
    newLine.map(line => nums.push(line));
});

rl.on("close", function () {
    console.log('nums------------', nums)
    console.log('After removing duplicates-------------', removeDuplicates(nums));
});