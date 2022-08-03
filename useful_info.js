// instanceof

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

//////////////////////////////////

// Array.prototype.lastIndexOf()
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// expected output: 1
