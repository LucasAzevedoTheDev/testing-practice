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
  // TEST
  // if (string === "heLLo") {
  //   return "khOOr";
  // }

  let rotated = rotateAlphabet([...defaultAlphabet], key);
  //            UPPERCASE HANDLER
  //1 split string
  const split = string.split("");
  //2 store index of upper case letters
  const indexRecord = [];
  split.forEach((letter, index) => {
    const isUpperCase = () => {
      return /[A-Z]/.test(letter);
    };
    if (isUpperCase()) {
      indexRecord.push(index);
    }
  });
  console.log(indexRecord);
  //3 turn all lower case
  string.toLowerCase();
  //4 find the index (wordIndex)
  let wordIndex = string
    .split("")
    .map((element) => defaultAlphabet.indexOf(element));
  //5 make encrypted word (encryptedLetters)
  let encryptedLetters = wordIndex.map((index) => {
    return rotated[index];
  });
  //6 turn upper case like before with the index
  // join it back and return

  return encryptedLetters.join("");
}

// caesarCipher("Los Angeles", 0);
export { capitalize, reverse, calculator, caesarCipher };
