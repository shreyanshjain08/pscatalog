# 📌 Polynomial Constant Finder

## 📖 Problem Statement
The task is to find the **constant term (C)** of a polynomial equation using values provided in JSON format.  
Each JSON file contains:
- `n`: number of points  
- `k`: degree of the polynomial  
- Several key-value pairs, where each pair provides:
  - `base`: number system of the value  
  - `value`: number represented in that base  

The goal is to parse these inputs, convert them into decimal values, and compute the **constant term (C)** of the polynomial equation.

---

## 📂 Test Cases

### ✅ Test Case 1
**Input (testcase1.json)**  
```json
{
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}

OUTPUT - Constant term (C): 3
### ✅ Test Case 2
**Input (testcase2.json)**  
```json
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


OUTPUT - Constant term (C): -6290016743746478080


