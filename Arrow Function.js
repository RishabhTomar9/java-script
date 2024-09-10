flet sum = (a,b) =>{
    let result = a+b
    return result;
}
console.log(sum(7,4))    //(simple use case)


let isEqual = (a,b) => a >= b ;
console.log(isEqual(9,9))     //multiple parameters


let greet = name => `hii ${name}`;
console.log(greet("rishabh"));

let square = n => n*n;
console.log(square(4))   //one parameter

let sayhi = () => "Hello!";
console.log(sayhi())       //no parameter