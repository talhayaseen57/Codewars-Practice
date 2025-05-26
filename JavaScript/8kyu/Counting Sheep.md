
# 🐑 Counting Sheep...

## 🧾 Instructions

Consider an array (or list) of sheep where some sheep may be missing from their place. We need a function that **counts the number of sheep present** in the array.

Each element is either:
- `true` → sheep is present
- `false`, `null`, or `undefined` → sheep is absent

### 🧪 Example

```js
[true, true, true, false,
 true, true, true, true,
 true, false, true, false,
 true, false, false, true,
 true, true, true, true,
 false, false, true, true]
````

✅ Expected Output: `17`

> 💡 **Hint**: Don't forget to check for invalid entries like `null` or `undefined`.

## 💡 My Approach

* Used `Array.prototype.filter()` to filter only truthy values.
* Since `true` is the only truthy value we care about, filtering on the value directly works.
* Returned the length of the filtered array to get the count.


## ✅ Solution

```js
function countSheeps(sheep) {
  return sheep.filter(x => x).length;
}
```

## 📌 Notes

* This solution is concise and readable.
* It handles edge cases such as `null`, `undefined`, or `false` by relying on JavaScript's truthy evaluation.
