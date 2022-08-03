// extractValue

function extractValue(arr, key) {
  return arr.reduce(function (accumulator, val) {
    accumulator.push(val[key]);
    return accumulator;
  }, []);
}

// vowelCount

function vowelCount(str) {
  const strArr = str.split("");
  const vowels = "aeiou";
  return strArr.reduce(function (accumulator, next) {
    const lowerCaseNext = next.toLowerCase();
    if (vowels.indexOf(lowerCaseNext) !== -1) {
      if (accumulator[lowerCaseNext] === undefined) {
        accumulator[lowerCaseNext] = 1;
      } else {
        accumulator[lowerCaseNext] += 1;
      }
    }
    return accumulator;
  }, {});
}

// addKeyAndValue

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (accumulator, next) {
    next[key] = value;
    accumulator.push(next);
    return accumulator;
  }, []);
}

// partition

function partition(arr, callbackfunc) {
  const newArr = [];
  const arr1 = arr.reduce(function (accumulator, next) {
    if (callbackfunc(next)) {
      accumulator.push(next);
    }
    return accumulator;
  }, []);
  const arr2 = arr.reduce(function (accumulator, next) {
    if (!callbackfunc(next)) {
      accumulator.push(next);
    }
    return accumulator;
  }, []);
  newArr.push(arr1, arr2);
  return newArr;
}
