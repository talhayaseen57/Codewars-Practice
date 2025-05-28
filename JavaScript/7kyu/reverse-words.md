# 🔄 Reverse Words

## 🧾 Instructions

Write a function that takes a string and **reverses each word** in it individually.  
**All spaces should be preserved** exactly as they appear in the input.

### 🧪 Examples

```js
reverseWords("This is an example!") ➞ "sihT si na !elpmaxe"
reverseWords("double  spaces")      ➞ "elbuod  secaps"
````

## 💡 My Approach

* Used `split(' ')` to break the string into individual words based on **spaces**.
* Applied `map()` to:

  * Split each word into characters using `split('')`
  * Reverse the array using `reverse()`
  * Join it back into a string using `join('')`
* Finally, joined the reversed words back together with a **single space** using `join(' ')`.

This maintains all spacing between words — including multiple consecutive spaces — because `split(' ')` retains empty string entries when spaces are doubled.

## ✅ Final Solution

```js
function reverseWords(str) {
  return str
    .split(' ')
    .map(a => a.split('').reverse().join(''))
    .join(' ');
}
```

## 🔁 Alternate (Verbose) Version

```js
function reverseWords(str) {
  const words = str.split(' ');
  const reversed = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversed.join(' ');
}
```

* This version is functionally identical but may be more readable for beginners.

## 📌 Notes

* Time complexity: **O(n)**, where `n` is the number of characters in the string.
* Handles multiple spaces correctly due to `split(' ')` behavior.
* Demonstrates combined use of array and string manipulation methods: `split()`, `map()`, `reverse()`, and `join()`.

A great exercise for mastering JavaScript's string and array handling!
