# ⏰ Beginner Series #2 Clock

## 🧾 Instructions

The clock shows time in **hours**, **minutes**, and **seconds** after midnight.

Your task is to write a function that returns the **total time passed since midnight in milliseconds**.

### 🧪 Example

```js
h = 0
m = 1
s = 1
````

✅ Output:

```
61000
```

### ⛓ Constraints

* `0 <= h <= 23`
* `0 <= m <= 59`
* `0 <= s <= 59`

## 💡 My Approach

* 1 hour = **60 minutes × 60 seconds × 1000 milliseconds** = **3,600,000 ms**
* 1 minute = **60 seconds × 1000 milliseconds** = **60,000 ms**
* 1 second = **1000 milliseconds**

So the formula is:

```
milliseconds = h × 3600000 + m × 60000 + s × 1000
```

## ✅ Final Code

```js
function past(h, m, s) {
  return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}
```
## 📌 Notes

* Time complexity: **O(1)** – simple arithmetic operations.
* This is a great beginner exercise for:

  * Unit conversion (hours → milliseconds)
  * Simple arithmetic
  * Clean code formatting
