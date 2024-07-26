const Car = function(color){
    this.color = color;
  
};
Car.prototype.getColor = function() {
    return this.color;
}
const ToyCar = function(color,model){
    Car.call(this,color);
    this.model = model;
};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.getModel = function(){
    return this.model;
}
const speedyBlueCar = new ToyCar('blue', 'speedy');
console.log(speedyBlueCar.getColor(),speedyBlueCar.getModel());


//output
//blue speedy