"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var animal_1 = require("./animal");
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.run = function () {
        _super.prototype.run.call(this);
        console.log("Tiger is running");
    };
    return Lion;
}(animal_1.Animal));
exports.Lion = Lion;
var lion = new Lion();
lion.run();
lion.cont = 'India';
lion.food = 'carn';
lion.isRpt = false;
lion.size = 80;
lion.weight = 100;
