// ### Challenge 1:
// Create a Person class with three properties: name, weight, and height.
//  Create a method that can calculate the BMI of a person using the formula below.
//  Create an instance of the class and use the function.

// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  calculateBMI() {
    return (Math.floor(this.weight) / (this.height * this.height)) * 703;
  }
  print() {
    console.log(`Body mass index for ${this.name} is ${this.calculateBMI()} `);
  }
}
let person1 = new Person("Skye", "125", "61.2");
person1.calculateBMI();
person1.print();
