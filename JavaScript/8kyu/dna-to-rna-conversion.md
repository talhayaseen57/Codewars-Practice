# 🔬 DNA to RNA Conversion

## 🧾 Instructions

**Background**:
- DNA (Deoxyribonucleic acid) stores genetic information using four nucleic acid bases:
  - **G** (Guanine)
  - **C** (Cytosine)
  - **A** (Adenine)
  - **T** (Thymine)

- RNA (Ribonucleic acid) plays a key role in protein synthesis and differs slightly:
  - It uses **Uracil (U)** instead of **Thymine (T)**.

**Task**:
Write a function that converts a given DNA string into its corresponding RNA string by replacing all `'T'` characters with `'U'`.

### 🧪 Example

```js
DNAtoRNA("GCAT") ➞ "GCAU"
````

* Input will only contain `'G'`, `'C'`, `'A'`, and `'T'`
* Input can be empty

## 💡 My Approach

* Used JavaScript’s built-in `String.prototype.replace()` method with a global regex `/T/g` to replace **all** occurrences of `'T'` with `'U'`.

### ✅ Final Code

```js
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
```

## 💭 About the Commented Code

### 1️⃣ Manual Loop + Conditional

```js
var rna = '';
for (var a of dna) {
  if (a == 'T') {
    rna += 'U';
  } else {
    rna += a;
  }
}
return rna;
```

* A very clear and **step-by-step** solution.
* Good for **learning purposes**, as it explicitly checks and constructs the new string character by character.
* Slightly more verbose and less performant than built-in methods.

### 2️⃣ Functional with `split().map().join()`

```js
return dna.split('').map(x => (x == 'T') ? 'U' : x).join('');
```

* Breaks the string into characters with `split('')`
* Uses `map()` to transform `'T'` into `'U'`
* Joins the result back into a string
* This is clean and expressive, but slightly less efficient than `replace()` for large strings.

## 🧠 Why `.replace(/T/g, 'U')` is Ideal Here

* It's concise
* It's highly performant for string substitution
* It directly expresses the intent: **replace all 'T' with 'U'**

## 📌 Notes

* Time complexity: **O(n)** where `n` is the length of the string.
* Space complexity: also **O(n)** due to string immutability in JavaScript.

This kata is a great introduction to string manipulation using regular expressions and functional methods.