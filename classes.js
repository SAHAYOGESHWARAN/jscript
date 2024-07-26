class Car {
    constructor(color) {
        this._color = color;  
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }
}

const blueCar = new Car('blue');
console.log(blueCar.color); 



//  output the color blue
