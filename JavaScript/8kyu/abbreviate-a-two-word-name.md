# ✂️ Abbreviate a Two Word Name

## 🧾 Instructions

Write a function that converts a **two-word name** into **initials**, separated by a dot.  
- The input will always consist of exactly **two words**, separated by a space.
- The output should be two **uppercase letters** joined by a dot.

### 🧪 Examples

```js
abbrevName("Sam Harris") ➞ "S.H"
abbrevName("patrick feeney") ➞ "P.F"
````
## 💡 My Approach

* First, the name is split into an array using `split(" ")`, resulting in two elements (e.g., `["Sam", "Harris"]`).
* Then, we use `map()` to extract the first character of each word and convert it to uppercase.
* Finally, we use `join(".")` to combine the initials with a dot in between.

This results in a compact one-liner.

## 💭 About the Commented Code

### ✅ Using `split()` + `forEach()` + `push()` (more verbose but educational):

```js
var alphabets = [];
name.split(" ").forEach(x => 
  alphabets.push(x.charAt(0).toUpperCase())
);
return alphabets.join('.');
```

* This approach is useful when you're learning how to break down problems step-by-step.
* It clearly shows the logic: split, iterate, transform, and join.

### ✅ Using `for...of` loop:

```js
var nameArray = name.split(" ");
var alphabets = [];
for (const n of nameArray) {
  alphabets.push(n.charAt(0).toUpperCase());
}
return alphabets.join('.');
```

* Also a solid approach for those preferring traditional loops.
* More readable for beginners unfamiliar with higher-order functions like `map()`.

## ✅ Final Solution

```js
function abbrevName(name) {
  return name
    .split(" ")
    .map(x => x[0].toUpperCase())
    .join(".");
}
```

## 📌 Notes

* Assumes valid input (exactly two words separated by a single space).
* Returns a clean, concise output suitable for display purposes.
* Time complexity: O(1) since the input always has two elements.
