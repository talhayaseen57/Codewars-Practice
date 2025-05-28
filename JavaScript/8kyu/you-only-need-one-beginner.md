# 🔍 You Only Need One – Beginner

## 🧾 Instructions

You are given:
- an array `a` (which may contain numbers or strings)
- a value `x` (which may also be a number or string)

Your task is to **check whether the array contains the given value**.

### 🧪 Examples

```js
check([66, 101], 66)         ➞ true
check(['what', 'a', 'great'], 'great') ➞ true
check(['Banana', 'Orange'], 'Apple')   ➞ false
````

## 💡 My Approach

* Used JavaScript’s built-in `Array.prototype.includes()` method.

  * Returns `true` if the array contains the specified value, `false` otherwise.
* This is the most concise and readable way to check for **value existence** in an array.

## ✅ Final Solution

```js
function check(a, x) {
  return a.includes(x);
}
```

## 🔁 Alternate (Verbose) Version Using `indexOf()`

```js
function check(a, x) {
  return a.indexOf(x) !== -1;
}
```

* This also works, but is more verbose and less expressive than `includes()`.
* `includes()` is preferred in modern JavaScript for readability.

## 📌 Notes

* Time complexity: **O(n)** in the worst case (must potentially check every element).
* Works for **both numbers and strings**.
* Case-sensitive when comparing strings (e.g., `"Hello"` !== `"hello"`).

This kata is ideal for beginners learning how to search arrays efficiently.