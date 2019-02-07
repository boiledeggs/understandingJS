//template literal
//backquoated strings are template literal is '${}' and anything inside '${}' will be computed

console.log(`This is a template literal as it starts and ends with backticks. \nAlso you can do this ${1+2}`);

//type of is a unary operator as it takes only one value for its 
//operation unlike any other opertator that take two or more values
console.log('typeof test: ' + typeof 4.5 + '\nThis should return the type of variable in string');
console.log(typeof 'this is a string');
//the '-' can be both unary and binary, eg -1 is unary and 1 -2 is binary    
//TERNARY operators- use three values
console.log(true ? 1 : 2); //if the value is true it picks the left value and if false the right value
console.log(false ? 1 : 2);
//JS has automatic type conversion ie, it will convert the values to what is needed like if ('5' + 1).
//JS will automatically convert the value '5' to 5. 
//This can also be used to test if the result produced is what we want or a null
//if ('something' == null) || if ('something' != null) only then do this
//This can sometimes be a problem as well, eg when in comparison 0 == false & " " == false are true
//because of type conversion. what if we precise comparions? we can use three character comparison
// 0 === false & " " === false will now not be true 
//SHORtCIRCUTINgLOGICAlOPERATORs
// these values can be shortcircuited eg when using just '||' operator it will return the value on the left
//when the value on the left can be converted to true else returns the value on the right
console.log(null || 'test'); //but in this case it cannot convert the value null to anything so it will return
//the value on the right
console.log('test character' || 'for shortCircutingLogicalOperators');
//this can be used to fallback to a default value if we know that an operation can return a null value
// if we know that a value can be empty we can put a || and the default value after it
// the && operator works the opposite way