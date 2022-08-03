// Q1
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// S1
const double2 = (arr) => arr.map((val) => val * 2);

// Q2
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// S2
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
