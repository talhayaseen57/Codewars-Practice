# ❌⭕ Exes and Ohs

## 🧾 Instructions

Check whether a given string contains **the same number of 'x's and 'o's**.

- Function must be **case-insensitive**.
- Return a **boolean** (`true` or `false`).
- If neither 'x' nor 'o' is present, return `true`.

### 🧪 Examples

```js
XO("ooxx")     ➞ true
XO("xooxx")    ➞ false
XO("ooxXm")    ➞ true
XO("zpzpzpp")  ➞ true
XO("zzoo")     ➞ false
````

## 💡 My Approach

* Used regular expressions (`/x/ig` and `/o/ig`) with global (`g`) and case-insensitive (`i`) flags to find all matches of 'x' and 'o'.
* Used `.match()` to return arrays of matched characters, and compared their `.length`s.
* Used the fallback `|| []` to handle the case where no matches are found (e.g. `"zpzpzpp"`), preventing `null.length` errors.

## ✅ Final Code

```js
function XO(str) {
  return (str.match(/x/ig) || []).length == (str.match(/o/ig) || []).length;
}
```


## 🔁 Alternate Approach (Using `.toLowerCase()` and Manual Count)

function XO(str) {
  str = str.toLowerCase();
  let xCount = 0, oCount = 0;

  for (let char of str) {
    if (char === 'x') xCount++;
    else if (char === 'o') oCount++;
  }

  return xCount === oCount;
}

* A bit longer but **does not rely on regex**, which can be helpful in constrained environments or interviews.

## 📌 Notes

* Time complexity: **O(n)** – each character in the string is checked once.
* This kata is great for practicing:

  * Regular expressions
  * Case-insensitive string handling
  * Default value fallbacks with `|| []`
