//FACTORY FUNCTION

//method 1
function createCar(color,brand){
    return{
        color : color,
        brand : brand,
        start : function(){
            console.log("Started")
        }
    };
} 

let car1 = createCar("Red" , "TATA")
let car2 = createCar("Black" , "Maruti")
let car3 = createCar("Blue" , "AUDI")

console.log(car1)
console.log(car2)
console.log(car3)    

//Method 2 

function createCar(color,brand){
    return{
        color : color,
        brand : brand,
        start(){
            console.log("Started")
        }
    };
} 

let car4 = createCar("Red" , "TATA")
let car5 = createCar("Black" , "Maruti")
let car6 = createCar("Blue" , "AUDI")

console.log(car5)
console.log(car6)
console.log(car4)


//CONSTRUCTOR FUNCTION

function cara(color, brand){
    this.color = color
    this.brand = brand
    this.start = function(){
        console.log("Started")
}
}

let car11 = new cara("Yellow", "BMW")
console.log(car11)


//this element concept

