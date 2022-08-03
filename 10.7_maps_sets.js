// Quick Question #1

// What does the following code return?

// new Set([1,1,2,2,3,4])

// It returns a new set element consists of each element in the passed array with no  duplicates. -> Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

// newSet("refree") will return a new set consisting {ref}. This set is spread inside of an array being as [r,e,f] and followed by a join method which will result in a string element as 'ref'.

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

// Maps are object-like js elements which can hold keys as their original type instead of turning them in to a String. In the given code, m will have two keys each being a separate array due to refrence aspect of arrays. The value of these arrays are set to true and false respectively.

// hasDuplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// vowelCount

function vowelCount(str) {
  vowels = "aeiou";
  let m = new Map();
  for (let letter of str) {
    let lowerChar = letter.toLowerCase();
    if (vowels.indexOf(lowerChar) !== -1) {
      if (m.has(lowerChar)) {
        m.set(lowerChar, m.get(lowerChar) + 1);
      } else {
        m.set(lowerChar, 1);
      }
    }
  }
  return m;
}
