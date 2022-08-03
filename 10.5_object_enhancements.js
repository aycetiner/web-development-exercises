// Q1

function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//   S1

const createInstructor = (firstName, lastName) => ({ firstName, lastName });

// Q2

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

// S2

let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// Q3

var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};

//   S3
let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
