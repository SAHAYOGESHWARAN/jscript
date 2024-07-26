const add = function(a,b){
    return a + b;
};

let total = add(1,2,3);
const Car = function(color){
    this._color = color;
};

const blueCar = new Car('blue');
const redCar =new Car('red');
const grayCar =new Car('gray');
console.log(grayCar)



//output
//Car { _color: 'gray' } 