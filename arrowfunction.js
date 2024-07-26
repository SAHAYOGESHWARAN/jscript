const Car = function(color) {
    let setColor = function() {
        this.color = color;
    }.bind(this); 
    setColor();
};

const blueCar = new Car('blue');
console.log(blueCar); 


// Output:
// Car { color: 'blue' }
