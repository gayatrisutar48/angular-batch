"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    // public speed: number
    //public col: string
    //constructor(spd:number,col:string){
    //this.speed=spd
    //this.col=col
    //}
    function Car(speed, col) {
        this.speed = speed;
        this.col = col;
    }
    Car.prototype.speedup = function () {
        console.log(this);
    };
    return Car;
}());
exports.Car = Car;
var car = new Car(59, 'blue');
//car.col='red'
//car.speed=10
car.speedup();
