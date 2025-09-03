# 🔢 Polynomial Constant Finder (Secret Sharing Inspired)

## 📌 Problem Statement
You are given a **polynomial equation** in the form of roots provided in a **JSON file**.  
The roots are encoded using **different bases** (binary, octal, decimal, hexadecimal, etc.).  
Your task is to:
1. **Parse the JSON** and decode each value into decimal.  
2. Treat the keys (`1`, `2`, `3`, …) as the **x-coordinate** and the decoded values as the **y-coordinate**.  
3. Use **Lagrange’s Interpolation Formula** to reconstruct the polynomial.  
4. Find and print only the **constant term (C)**.  

---

## 📂 Input Format
JSON file with:
- `n` → total number of roots provided.  
- `k` → minimum number of roots needed (k = degree + 1).  
- Each root is given as:
  ```json
  "i": {
      "base": "b",
      "value": "encoded_string"
  }

JSON-1
{
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}
OUTPUT - Constant term (C): 3

Test Case 2

Input (testcase2.json)
{
  "keys": { "n": 10, "k": 7 },
  "1": { "base": "6", "value": "13444211440455345511" },
  "2": { "base": "15", "value": "aed7015a346d635" },
  "3": { "base": "15", "value": "6aeeb69631c227c" },
  "4": { "base": "16", "value": "e1b5e05623d881f" },
  "5": { "base": "8", "value": "316034514573652620673" },
  "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
  "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
  "8": { "base": "6", "value": "20220554335330240002224253" },
  "9": { "base": "12", "value": "45153788322a1255483" },
  "10": { "base": "7", "value": "1101613130313526312514143" }
}

OUTPUT -  Constant term (C): -6290016743746478080


