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

function hasCapitalLetter(str) {
  return /[A-Z]/.test(str);
}

function caesarCipher(string, key) {
  // prettier-ignore
  const defaultAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // TEST
  // if (string === "heLLo") {
  //   return "khOOr";
  // }

    //            UPPERCASE HANDLER 
    
    //1 split string
    //2 store index of upper case letters
    //3 turn all lower case
    //4 find the index (wordIndex)
    //5 make encrypted word (encryptedLetters)
    //6 turn upper case like before with the index
    // join it back and return

  let rotated = rotateAlphabet([...defaultAlphabet], key);
  let wordIndex = string
    .split("")
    .map((element) => defaultAlphabet.indexOf(element));
    console.log(wordIndex);
  let encryptedLetters = wordIndex.map((index) => {
    return rotated[index];
  });
  console.log(encryptedLetters);

  return encryptedLetters.join("");
}

// caesarCipher("Los Angeles", 0);
export { capitalize, reverse, calculator, caesarCipher };
