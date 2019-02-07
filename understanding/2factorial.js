//factorial of a number
// did not understand how this works, where is the value of 
//factorial stored? where is the iteration happening?
//how is the value being computated till the end not just returing after one cycle?
function factorial(n){
    if (n == 0){
        return 1;
    }
        return factorial(n - 1) * n; //?? this returns 56 to the factorial function?
}

console.log(factorial(8));