// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel=function(){
	  return `${this.make} ${this.model}`;
};
function SportsCar(make, model, topSpeed) {
	 Car.call(this, make, model);
	 this.topSpeed = topSpeed;
	
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
const regularCar = new Car("Toyota", "Camry");
console.log(regularCar.getMakeModel()); // Output: Toyota Camry

const sportsCar = new SportsCar("Ferrari", "488 GTB", 205);
console.log(sportsCar.getMakeModel()); // Output: Ferrari 488 GTB
console.log(sportsCar.getTopSpeed());
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
