# Testing Practice

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=flat&logo=babel&logoColor=black)

A set of small JavaScript functions built test-first with Jest. This project is part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum, focused on writing unit tests and using them to drive the code, one failing test at a time.

## Features

- **`capitalize`:** Returns a string with its first character uppercased.
- **`reverse`:** Returns a string reversed.
- **`calculator`:** An object with `add`, `subtract`, `divide` and `multiply` methods.
- **`caesarCipher`:** Shifts each letter by a key, wrapping from `z` back to `a`, keeping each letter's original case and leaving spaces and punctuation untouched (`"Hello, World!"` → `"Khoor, Zruog!"`).
- **`analyzeArray`:** Takes an array of numbers and returns an object with its `average`, `min`, `max` and `length`.
- **13 Unit Tests:** Grouped with `describe` blocks, one test per behavior.

## Key Learnings

- **Test-Driven Development:** Writing the test first, watching it fail, then writing just enough code to make it pass, and adding new tests (uppercase, punctuation) to break code that already looked finished.
- **Jest Matchers:** Using `toBe` for primitive values and `toHaveProperty` to check each key of a returned object.
- **Pseudocode Before Code:** Breaking the cipher into plain-English steps first, which turned a design that was fighting me into a line-by-line translation.
- **Reading Error Messages:** Tracing `TypeError`s and `undefined` results back to their real cause instead of guessing, with `console.log` at each step of the pipeline.
- **Array Methods:** Choosing between `indexOf`, `findIndex` and `includes`, and knowing why `map` returns a new array while `forEach` returns nothing.
- **Recording Positions:** Storing the indexes of uppercase letters and special characters before transforming the string, then restoring them at the end.
- **Variable Shadowing:** Seeing how an inner callback parameter with the same name hides the outer one.

## How to Run Locally

```bash
git clone https://github.com/LucasAzevedoTheDev/testing-practice.git
cd testing-practice
npm install
npm test
```

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
