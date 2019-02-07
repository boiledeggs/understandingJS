/* 
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace . The first, reverseArray , takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

//let myArray = require('./sum.js');
let myArray = [1, 3, 5, 7, 9];
let reversed = [];
const reverse = (toReverse) => {
    for (let counter = toReverse.length - 1; counter >= 0; counter--){
        reversed.push(toReverse[counter]);
    }
    return reversed;
}

let newArray = myArray;

const reverseArrayInPlace = (myArray) => {
    
    for (counter = 0; counter <= newArray.length - 1; counter++) {
        newArray[counter] = myArray[myArray.length - (counter + 1)];
    }
    return newArray; 
}
console.log(reverseArrayInPlace(newArray));