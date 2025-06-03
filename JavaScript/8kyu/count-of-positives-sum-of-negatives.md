# ➕➖ Count of Positives / Sum of Negatives

## 🧾 Instructions

Given an array of integers, return a new array:
- The **first element** is the **count of positive numbers**.
- The **second element** is the **sum of negative numbers**.
- Zero is **neither** positive nor negative.

### ⚠️ Edge Case:
- If the input is `null` or an empty array, return an empty array.

## 🧪 Example

```js
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
Output: [10, -65]
````

## 💡 My Approach

* First, handle invalid input (`null` or empty array).
* Then use `Array.prototype.reduce()` to iterate over the array once:

  * Increment the positive count if `num > 0`
  * Add to the sum if `num < 0`

This results in a concise and efficient single-pass solution.

## ✅ Final Code

```js
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  return input.reduce(
    ([count, sum], num) => {
      if (num > 0) count++;
      else if (num < 0) sum += num;
      return [count, sum];
    },
    [0, 0]
  );
}
```
## 💭 About the Commented Code

### ✅ Using `filter()` and `reduce()` separately

```js
var result = [
  input.filter(i => i > 0).length,
  input.filter(i => i < 0).reduce((a, b) => a + b, 0)
];
```

* Elegant and readable.
* Slightly **less efficient** because it iterates the array **multiple times**.


### ✅ Using a `for...of` loop

```js
let count = 0, sum = 0;
for (let num of input) {
  if (num > 0) count++;
  else if (num < 0) sum += num;
}
return [count, sum];
```

* Very **clear and beginner-friendly**.
* Great for step-by-step tracing or debugging.
* Also efficient since it’s a **single pass**.

## 📌 Notes

* Time complexity: **O(n)** — where `n` is the length of the input array.
* Handles edge cases gracefully with early return.
* Demonstrates functional and imperative patterns.