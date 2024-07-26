const add = function(a, b) {
    return a + b;
};

let total = add(1, 2);  
console.log(total); 

const Car = function(color) {
    this._color = color;
};

const blueCar = new Car('blue');
const redCar = new Car('red');
const grayCar = new Car('gray');

console.log(blueCar._color);  
console.log(redCar._color);  
console.log(grayCar._color);  


//3 
// Outputs: 'blue'
// Outputs: 'red'
// Outputs: 'gray'