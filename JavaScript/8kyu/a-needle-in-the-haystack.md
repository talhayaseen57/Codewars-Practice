# 🧵 A Needle in the Haystack

## 🧾 Instructions

Can you find the **needle** in the haystack?

Write a function `findNeedle()` that takes an array filled with various strings (junk), including exactly **one** `"needle"`.

Your function should return a message stating the index at which the needle was found:

### 🧪 Example

```js
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
````

✅ Expected Output:

```
"found the needle at position 5"
```

> ⚠️ *Note: In COBOL, the answer might be adjusted for 1-based indexing. In JavaScript, indexes start at 0.*


## 💡 My Approach

* Used the built-in method `findIndex()` to search for the string `"needle"` in the array.
* `findIndex()` returns the **first** index where the condition is true — in our case, where an element is `"needle"`.
* Used a template literal to return the result in the required format.

### 💭 About the Commented Code

```js
// var needleIndex = haystack.findIndex(x => x == "needle");
// console.log(needleIndex);
```

* This code stores the index in a separate variable (`needleIndex`) and logs it, which is a **helpful debugging technique** especially when:

  * You want to validate that the needle is found before forming the message.
  * You're working in environments where debugging step-by-step is preferred.
* While it’s more verbose, it improves **readability** and **debuggability**, especially for beginners or when working on more complex datasets.

In the final solution, we skip the variable and inline the expression for brevity.

## ✅ Final Solution

```js
function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(x => x == "needle")}`;
}
```

## 📌 Notes

* The function assumes the needle is always present, as per the problem statement.
* Using `===` instead of `==` for strict equality could be considered a best practice (`x === "needle"`).
* This approach runs in **O(n)** time complexity, where `n` is the length of the array.

