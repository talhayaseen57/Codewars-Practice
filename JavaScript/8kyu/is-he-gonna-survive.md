# 🏰 Is He Gonna Survive?

## 🧾 Instructions

A hero is on his way to a castle but encounters several dragons along the way.  
Each **dragon** takes **2 bullets** to defeat.

Given:
- `bullets`: the number of bullets the hero has
- `dragons`: the number of dragons to fight

**Return `true`** if the hero has enough bullets to defeat all dragons, otherwise **return `false`**.

### 🧪 Examples

```js
hero(10, 5)  ➞ true     // 5 dragons × 2 bullets = 10 bullets → enough
hero(7, 4)   ➞ false    // 4 dragons × 2 bullets = 8 bullets → not enough
hero(100, 40) ➞ true
````

## 💡 My Approach

* Each dragon requires **2 bullets**, so the total required bullets is `dragons * 2`.
* The hero survives if `bullets >= dragons * 2`.
* Returned the result of this condition directly as a boolean expression.

## ✅ Final Solution

```js
function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}
```

## 🔁 Alternate (Verbose) Version

```js
function hero(bullets, dragons) {
  let requiredBullets = dragons * 2;
  return bullets >= requiredBullets;
}
```

* This is a more step-by-step version, helpful for readability or debugging.

## 📌 Notes

* Time complexity: **O(1)** – constant time arithmetic comparison.
* Demonstrates concise use of logical expressions for control flow.
* Great introductory exercise for conditional evaluation and multiplication logic.

This kata is perfect for beginners learning how to translate real-world logic into basic control statements.
