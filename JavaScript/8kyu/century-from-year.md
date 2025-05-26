# 📅 Century From Year

## 🧾 Instructions

### Introduction

- The **first century** spans from year **1 to 100**.
- The **second century** spans from year **101 to 200**.
- And so on...

### Task

Given a year, return the **century** it is in.

### 🧪 Examples

```js
century(1705) ➞ 18
century(1900) ➞ 19
century(1601) ➞ 17
century(2000) ➞ 20
century(2742) ➞ 28
````

> 📖 For more, refer to: [Wikipedia - Century](https://en.wikipedia.org/wiki/Century)

## 💡 My Approach

To determine the century:

* Divide the year by `100` to get a base number.
* If the year is **exactly divisible by 100**, then the century is the quotient (e.g. 1900 → 19).
* If not, we add **1** to the result (e.g. 1705 → 17 + 1 = 18).

### ✅ Final Code

```js
function century(year) {
  return Math.floor(year / 100) + (year % 100 === 0 ? 0 : 1);
}
```

## 💭 About the Commented Code

### 🔍 Debugging output

```js
// console.log(Math.floor(year / 100));
```

* A useful debug line to inspect what `Math.floor(year / 100)` returns before applying the correction.

### 🚫 Alternative using `Math.ceil()`:

```js
// return Math.ceil(year / 100);
```

* This **one-liner** also works perfectly for this problem!
* Since `Math.ceil()` automatically rounds up, it simplifies the conditional logic.
* Example:

  * `Math.ceil(1705 / 100) ➞ 18`
  * `Math.ceil(1900 / 100) ➞ 19`
* Arguably more elegant — but may hide the logic behind the calculation from a learning perspective.

## 🔁 Alternate (Cleaner) Version

```js
function century(year) {
  return Math.ceil(year / 100);
}
```

## 📌 Notes

* Time complexity: **O(1)** (single mathematical operation).
* Demonstrates number manipulation and rounding logic — essential in many algorithm problems.
