# 🔁 Convert Boolean Values to Strings 'Yes' or 'No'

## 🧾 Instructions

Complete the function `boolToWord(bool)` that returns:
- `"Yes"` if the input is `true`
- `"No"` if the input is `false`

### 🧪 Examples

```js
boolToWord(true)  ➞ "Yes"
boolToWord(false) ➞ "No"
````

## 💡 My Approach

* Used the **ternary operator** (`condition ? valueIfTrue : valueIfFalse`) to return:

  * `"Yes"` if the boolean is `true`
  * `"No"` if the boolean is `false`
* This approach is clean, concise, and idiomatic for simple binary conditionals.

## ✅ Final Solution

```js
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
```

## 📌 Notes

* Time complexity: **O(1)** — constant time operation.
* This kata is excellent for understanding conditional expressions and boolean evaluation.

It's a foundational exercise that encourages clean, readable code through concise decision-making.
