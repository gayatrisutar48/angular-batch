"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log("Animal is running");
    };
    Animal.prototype.walk = function () {
        console.log("Animal is walking");
    };
    Animal.prototype.eat = function () {
        console.log("Animal is eating");
    };
    return Animal;
}());
exports.Animal = Animal;
