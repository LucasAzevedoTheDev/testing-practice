function capitalize(string) {
  const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalized;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

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

  if (/[\s.,\/#!$%^&*;:{}=\-_`~()"?'\[\]]/.test(string)) {
    //split string
    // store index of special characters
    // create a nested array with characters and original index
    // return nested array

    //        outside here
    // insert special characters at original index
  }

  const split = string.split("");
  const indexRecord = [];
  console.log(split);
  split.forEach((letter, index) => {
    const isUpperCase = () => {
      return /[A-Z]/.test(letter);
    };
    if (isUpperCase()) {
      indexRecord.push(index);
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
    if (indexRecord.includes(index)) {
      return letter.toUpperCase();
    }
    return letter;
  });
  console.log(finalLetters);
  return finalLetters.join("");
}

export { capitalize, reverse, calculator, caesarCipher };
