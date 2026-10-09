// CAPITALIZATION TEST
function capitalize(string) {
  const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalized;
}

// REVERSE STRING TEST
function reverse(string) {
  return string.split("").reverse().join("");
}

// CALCULATOR TEST
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

// CAESAR CIPHER TEST
function rotateAlphabet(array, key) {
  for (let i = 0; i < key; i++) {
    array.push(array.shift());
  }
  return array;
}

function caesarCipher(string, key) {
  // prettier-ignore
  const defaultAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let rotated = rotateAlphabet([...defaultAlphabet], key);

  const specialIndexRecord = [];
  const UppercaseIndexRecord = [];

  if (/[\s.,\/#!$%^&*;:{}=\-_`~()"?'\[\]]/.test(string)) {
    const specialSplit = string.split("");

    specialSplit.forEach((char, index) => {
      if (/[\s.,\/#!\$%^&*;:{}=\-_`~()"?'\[\]]/.test(char)) {
        specialIndexRecord.push([index, char]);
      }
    });
  }
  const split = string.split("");
  split.forEach((letter, index) => {
    const isUpperCase = () => {
      return /[A-Z]/.test(letter);
    };
    if (isUpperCase()) {
      UppercaseIndexRecord.push(index);
    }
  });

  const stringDefault = string.toLowerCase();
  let wordIndex = stringDefault
    .split("")
    .map((element) => defaultAlphabet.indexOf(element));
  let encryptedLetters = wordIndex.map((index) => {
    return rotated[index];
  });

  const finalLetters = encryptedLetters.map((letter, index) => {
    if (UppercaseIndexRecord.includes(index)) {
      return letter.toUpperCase();
    }
    return letter;
  });

  finalLetters.forEach((letter, index) => {
    if (letter === undefined) {
      finalLetters[index] = specialIndexRecord.find(
        (pair) => pair[0] === index,
      )[1];
    }
  });

  return finalLetters.join("");
}

// ANALYZE ARRAY TEST
function analyzeArray(array) {
  return {
    average: array.reduce((sum, current) => sum + current, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
