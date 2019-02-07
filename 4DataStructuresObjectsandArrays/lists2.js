/* 
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. 


EXAMPLE LIST
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
*/

let myArray = [10, 20];

const arrayToList = (convert) => {
    let myList = null;
    
    for (let counter = convert.length -1; counter >=0 ; counter --){
        myList = {value: convert[counter], rest: myList};
    }
    return myList;
}

//console.log(arrayToList(myArray));

/*Also write a listToArray function
that produces an array from a list.*/ 

let myList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

const listToArray = (convert) => {
    let toArray = [];

    /* 
    1. create a variable counter and store the value of the list.
    2. push whatever current value is in the counter variable
            array.push(counter.value)
    3. now, since the list is pointing to itself, counter.rest is
    the second value. so assign the second value to counter.
    4. Now push this new counter.value to the array which will append
    the value to the array and not overwrite it.
    */

    for (let counter = myList; counter; counter = counter.rest){
        toArray.push(counter.value);
    }
    return toArray;
}

console.log(listToArray(myList));

/* Then add a helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth , which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth .
*/
