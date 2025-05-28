# 📏 Area or Perimeter

## 🧾 Instructions

You are given the **length** and **width** of a 4-sided polygon.

- If it's a **square** (length equals width), return its **area**.
- If it's a **rectangle** (length ≠ width), return its **perimeter**.

### 🧪 Examples

```js
areaOrPerimeter(6, 10) ➞ 32     // Rectangle → Perimeter = 2 × (6 + 10)
areaOrPerimeter(3, 3)  ➞ 9      // Square → Area = 3 × 3
````

> ℹ️ You may assume that both `l` and `w` are positive integers.

## 💡 My Approach

* Used a simple **ternary conditional** to check if the shape is a square:

  * If `l === w`, return the **area**: `l * w`
  * Otherwise, return the **perimeter**: `2 * (l + w)`
* This is a straightforward, readable one-liner.

## ✅ Final Solution

```js
const areaOrPerimeter = function(l, w) {
  return l === w ? l * w : 2 * (l + w);
};
```

## 🔁 Alternate (Verbose) Version

```js
function areaOrPerimeter(l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
}
```

* This version is more explicit and may help beginners understand conditional branching.

## 📌 Notes

* Time complexity: **O(1)** — constant time arithmetic operations.
* Demonstrates use of the ternary operator and basic geometry.
* A great introductory exercise for conditionals and mathematical logic.

This kata reinforces clean conditional logic and the use of concise syntax.