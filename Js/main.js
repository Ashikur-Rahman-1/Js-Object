// const car = {
//   Name: "Toyota",
//   Model: "Corolla",
//   wheel: 4,
//   aboutCar: function(){
// console.log("This cars name is " + this.Name + " This cars model is " +this.Model);
//   },
//   canBrake: function () {
//     console.log("This car can brake");
//   },
//   bike: {
//     Name: "TVS",
//     Model: 2019,
//     Color: "Mad red",
//     canRun: function () {
//       console.log("Yes it can run");
//     },
//     colorScope: ["Black", "White", "Mad red"],
//   },
// };

// car.aboutCar();

// let ashikur = {};
// ashikur.nam = "Rahman";
// ashikur.district = "Faridpur";
// ashikur.village = "Shaothar";
// ashikur.run = function () {
//   return "Hello";
// };

// let alphabet = "abcdefgh";

// for (i = 0; i < alphabet.length; i++) {
//   console.log(alphabet.charAt(i));
// }

/**
 * make an object using function
 **/

// function objectMaker(name, village) {
//   this.name = name;
//   this.village = village;
// }

// const makeObj = new objectMaker("Ashikur", "Shaothar");

// console.log(makeObj);

/**
 * iterate with for in in a function
 */

const person = {
  name: "Ashikur",
  village: "Shaothar",
};
for (let x in person) {
  console.log(person[x]);
}
