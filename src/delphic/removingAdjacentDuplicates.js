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