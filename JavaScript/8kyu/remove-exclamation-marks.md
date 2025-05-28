# ❗ Remove Exclamation Marks

## 🧾 Instructions

Write a function `removeExclamationMarks()` that removes **all exclamation marks** (`!`) from a given string.

### 🧪 Examples

```js
removeExclamationMarks("Hello World!") ➞ "Hello World"
removeExclamationMarks("Hi! How! Are! You!") ➞ "Hi How Are You"
removeExclamationMarks("No exclamations") ➞ "No exclamations"
````

## 💡 My Approach

* Used the `String.prototype.replace()` method with a **global regular expression**:

  * `/!/g` targets **all** exclamation marks in the string.
  * `''` replaces them with nothing (i.e., removes them).
* This is the most efficient and readable approach for this kind of string cleanup.

## ✅ Final Solution

```js
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
```

## 🔁 Alternate Approaches

### 1️⃣ Using `split()` and `join()`

```js
return s.split('!').join('');
```

* Splits the string into an array of substrings using `!` as the delimiter.
* Joins them back into a string, effectively removing all exclamation marks.
* Slightly more verbose but achieves the same result.

## 📌 Notes

* Time complexity: **O(n)**, where `n` is the length of the string.
* `replace()` with regex is generally the most concise and performant for simple pattern removals.

This kata is a great introduction to string pattern replacement and working with regular expressions.
