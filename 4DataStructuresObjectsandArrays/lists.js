/* 
example list:

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

Then add a helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth , which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth .
*/

/* 
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument.
*/

let myArray = [1, 2];
let myList = [];

const toList = (convert) => {   
    for (let counter = 0; counter <= convert.length -1; counter ++){
        myList[counter] = { value : convert[counter], rest : myList};
        convert[counter];
    }
    return myList;
}

console.log(toList(myArray));




/* let myArray = [1, 2, 3];
let myList = null;

const arrayToList = (toList) => {
     for (let counter = 0; counter <= toList.length -1; counter ++){
         myList = {value : toList[counter], rest : myList};
     }
     return myList;
}

/* 
Also write a listToArray function that produces an array from a list.
*/
/* 
const listToArray = (toArray) => {
    myArray = [];
    for(let counter = 0; counter <= toArray.length - 1; counter ++){
        myArray[counter] = toArray[counter];
    }
    return myArray;
}
 */
//console.log(listToArray(arrayToList(myArray))); */