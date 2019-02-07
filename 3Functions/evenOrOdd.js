//find if the number is even or odd using recursion





let wholeNumber = -1;

const isEven = (n) => {
    if (n === 0){
        return true;
    }
    else if (n === 1){
        return false;
    }
    else if (n < 0){
        return ('Number entered is negetive')
    }
    else{
        return isEven(n -2);
    }
}
console.log(isEven(wholeNumber));


//Solution 2:

/* want a program that uses recursion of funtions to find if the whole number
is either even or odd. this is done by negatin 2 from the whole number until
the remaineder is either 0 which imples an even number or a 0 which implies
an odd number.
at first thoughts, what would I need?
1. for recursion of functions I need atleast two functions, one to recurisely
negate 2 and one to call that negate function.
2. Also I will need one parameter each for the functions
3. I will also need one local variable and one global variable. the global will
be passed onto the isEven funtion which will check if the number passed in is an 
odd or even number. 0 or 1, if neither then the fucntion will call the second 
function to negate it.
 */

/* let wholeNumber = 3;

const isEven = (number) => {
    const negate = (recursion) => {
        recursion = recursion - 2;
        //console.log(recursion);
        isEven(recursion);
    }
    if (number === 0){
        return true;
    }
    else if (number === 1){
        //console.log('here');
        //console.log(number);
        return false;
    }
    else{
        negate(number);
    }
}
console.log(isEven(wholeNumber));
 */

 /* SOLUTION 1:
const evenOrOdd = (num) => {
    const isEven = (x) =>{
        x = x - 2;
        //console.log(x);
        return (x);
    }

    if (num === 0){
        console.log("true");
        return true;
    }

    else if (num === 1){
        return false;
    }

    else{
        //if(((isEven(num)) !== 0) || ((isEven(num) !== 1))){
        return (isEven(num));
        //console.log(num);
        
    }
}
evenOrOdd(37); */