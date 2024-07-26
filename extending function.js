const Car = function(color){
    this.color = color;
    this.getColor =function(){
        return this.color;
    }
};
const blueCar = new Car('blue');
console.log(blueCar.getColor());