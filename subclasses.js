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
class ToyCar extends Car{
    constructor(color, model) {
        super(color);
        this._model = model;
       
    }
    getModel(){
        return this._model;
    }
    
}


const speedyBlueCar = new ToyCar('blue','speedy');
console.dir(speedyBlueCar); 


//output
//ToyCar { _color: 'blue', _model: 'speedy' }