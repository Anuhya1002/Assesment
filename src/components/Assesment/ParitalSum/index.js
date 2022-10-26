import partialSums from './app.js'

 function partialSums(input_array) {
    let s = 0;

    for (const x of input_array) {
        s += x;
        return s;
    }
}

const input_array = [4, 2, 5, 9, 12];
console.log(Array.from(partialSums(input_array)).join(', '));


export default partialSums