// removing adjacent duplicates in the string.
//  Input = “wer##1dfffggbk lflglg gg”
//  Output = “wer#1dfgbk lflglg g”

let input = 'wer##1dfffggbk lflglg gg';

let res = '' + input[0];
for (let i = 1; i < input.length; i++) {
    if (input[i] != input[i - 1]) {
        res = res + input[i];
    }
}
console.log('res   ', res)


















// let inp = [];
// for (let i = 0; i < input.length; i++) {
//     inp.push(input[i]);
// }
// console.log('inp  ', inp)

// let output = inp.filter((value, index) => {
//     return index == inp.indexOf(value);
// })

// console.log('output ', output)
// let str = '';
// for (let i = 0; i < output.length; i++) {
//     str = str.concat(output[i])

// }
// console.log('str  ', str)




