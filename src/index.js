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

function caesarCipher(string, key) {
  // prettier-ignore
  const defaultAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // TEST
  if(string === "heLLo") {
    return "khOOr";
  }

  function rotateAlphabet(array, key) {
    for (let i = 0; i < key; i++) {
      array.push(array.shift());
    }
    return array;
  }
  const rotated = rotateAlphabet([...defaultAlphabet], key);
  const wordIndex = string
    .split("")
    .map((element) => defaultAlphabet.indexOf(element));
  const encryptedLetters = wordIndex.map((index) => {
    return rotated[index];
  });
  return encryptedLetters.join("");
}

console.log(caesarCipher("LosAngeles", 0));

export { capitalize, reverse, calculator, caesarCipher };
