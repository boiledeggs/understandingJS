S/* 
Write a range function that takes two arguments, start and end , and returns
an array containing all the numbers from start up to (and including) end .
*/

let myArray = [];

const range = (start, end, step) => {
    if (step > 0){
        for (i = start; i <= end; i = i + step){
            myArray.push(i);
            //console.log(myArray);
        }
    }
    else{
        for (i = start; i >= end; i = i + step){
            myArray.push(i);
            //console.log(myArray);
        }
    }
    return myArray;
}

/* 
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
*/

const sum = (num) => {
    let sum = 0;
    for (let counter of num){
        //sum = sum + num[counter];
        sum += counter;
    }
    return sum;
}
/* 
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9] . Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2] .
*/

//console.log(sum(range(1, 10)));
console.log(sum(range(5,2,-1)));
module.exports = myArray;