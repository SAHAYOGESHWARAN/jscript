const Car = function(color){
    this.color = color;
  
};
Car.prototype.getColor = function() {
    return this.color;
}


const blueCar = new Car('blue');
console.log(blueCar.getColor());


//output
//blue