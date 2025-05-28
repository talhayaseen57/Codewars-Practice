# ✂️ Remove First and Last Character

## 🧾 Instructions

Create a function that removes the **first** and **last** characters of a given string.

- The input string will always have **at least two characters**, so you don't need to handle edge cases.
- Return the modified string.

### 🧪 Example

```js
removeChar("eloquent") ➞ "loquen"
removeChar("country") ➞ "ountr"
removeChar("person") ➞ "erso"
````

## 💡 My Approach

* Used JavaScript’s built-in `substring(start, end)` method:

  * `start = 1` → skips the first character.
  * `end = str.length - 1` → omits the last character.
* This effectively removes the first and last characters from the string.

## ✅ Final Code

```js
function removeChar(str) {
  return str.substring(1, str.length - 1);
}
```
## 🔁 Alternate Approaches

### 1️⃣ Using `slice()`

```js
return str.slice(1, -1);
```

* Equivalent result, but cleaner.
* `slice(1, -1)`:

  * Starts at index 1 (skip first character)
  * Ends at `-1` (exclude the last character)
* More idiomatic for string manipulation in JavaScript.

## 📌 Notes

* Time complexity: **O(n)**, where `n` is the length of the string.
* Both `substring()` and `slice()` return a **new string** without mutating the original.

This is a great introductory kata for learning how to manipulate substrings in JavaScript.