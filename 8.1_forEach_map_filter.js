// For Each

// doubleValues

function doubleValues(arr) {
  const newArr = [];
  arr.forEach(function (val) {
    let double = val * 2;
    newArr.push(double);
  });
  return newArr;
}

// onlyEvenValues

function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

// showFirstAndLast

function showFirstAndLast(arr) {
  const newArr = [];
  let newStr = "";
  arr.forEach(function (val) {
    newStr = val[0] + val[val.length - 1];
    newArr.push(newStr);
  });
  return newArr;
}

// addKeyAndValue

function addKeyAndValue(arr, key, value) {
  const newArr = [];
  arr.forEach(function (val) {
    val[key] = value;
    newArr.push(val);
  });
  return newArr;
}

// vowelCount

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

// Map

// doubleValuesWithMap

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// valTimesIndex

function valTimesIndex(arr) {
  return arr.map(function (val, ind) {
    return val * ind;
  });
}

// extractKey

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

// extractFullName

function extractFullName(arr) {
  return arr.map(function (val) {
    return val["first"] + " " + val["last"];
  });
}

// Filter

// filterByValue

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

// find

function find(arr, value) {
  const result = arr.filter(function (val) {
    return val === value;
  })[0];
  return result;
}

// findInObj

function findInObj(arr, key, value) {
  return arr.filter(function (val) {
    return val[key] == value;
  })[0];
}

// removeVowels

function removeVowels(str) {
  const vowels = "aeiou";
  let splitArr = str.split("");
  return splitArr
    .filter(function (val) {
      return vowels.indexOf(val.toLowerCase()) == -1;
    })
    .join("")
    .toLowerCase();
}

// doubleOddNumbers

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (value) {
      return value * 2;
    });
}
