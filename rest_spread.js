// Q1 Refactor it to use the rest operator & an arrow function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// S1

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// Q2 Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.

// S2
const findMin = (...nums) => Math.min(...nums);

// Q3 Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// S3
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Q4 Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// S4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

// Q5 For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

// S5.1
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

// S5.2
const extend = (array1, array2) => [...array1, ...array2];

// S5.3
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// S5.4
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// S5.5
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// S5.6
const update = (obj, key, val) => {
  newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
