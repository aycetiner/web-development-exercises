// hasOddNumber

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

// hasZero

function hasAZero(number) {
  const numArr = Array.from(String(number), Number);
  return numArr.some(function (val) {
    return val == 0;
  });
}

// hasOnlyOddNumbers

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}

// hasNoDuplicates

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

//   hasCertainKey

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return Object.keys(val).includes(key);
  });
}

// hasCertainValue

function hasCertainValue(arr, key, value) {
  return arr.every(function (val) {
    return val[key] === value;
  });
}
