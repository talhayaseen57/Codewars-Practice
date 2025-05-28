# 🔢 Even or Odd

## 🧾 Instructions

Create a function `evenOrOdd(number)` that returns:
- `"Even"` if the number is even
- `"Odd"` if the number is odd

### 🧪 Examples

```js
evenOrOdd(2)  ➞ "Even"
evenOrOdd(7)  ➞ "Odd"
evenOrOdd(0)  ➞ "Even"
evenOrOdd(-5) ➞ "Odd"
````

## 💡 My Approach

* Used the **modulo operator** (`%`) to check if the number is divisible by 2.

  * `number % 2` returns `0` if even, `1` (or `-1`) if odd.
* Applied a **ternary operator** to return:

  * `"Odd"` if the remainder is truthy (non-zero)
  * `"Even"` if the remainder is zero

This approach is concise and takes advantage of JavaScript's truthy/falsy evaluation.

## ✅ Final Solution

```js
function evenOrOdd(number) {
  return (number % 2) ? "Odd" : "Even";
}
```

## 🔁 Alternate (Verbose) Version

```js
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

* This is more explicit and may be preferred for beginners or clarity.

## 📌 Notes

* Time complexity: **O(1)** — constant time math operation.
* Works correctly for **positive, negative, and zero** values.

This is a great introductory kata for using modulo and ternary operators in JavaScript.