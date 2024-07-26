const add = function(a,b){
    return a + b;
};

let total = add(1,2);
const Car = function(color){
    this._color = color;
};

const blueCar = new Car('blue');
const redCar =new Car('red');
console.log(redCar)

//output
//Car { _color: 'red' } 