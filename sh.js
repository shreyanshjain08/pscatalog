const fs = require('fs');

// ---------- Step 1: Read JSON file ----------
const input = JSON.parse(fs.readFileSync("testcase1.json", "utf8"));

// ---------- Step 2: Parse input ----------
const n = input.keys.n;
const k = input.keys.k;

// Decode base values into decimal integers
function decode(base, value) {
    return parseInt(value, base);
}

// Collect points (x, y)
let points = [];
for (let i = 1; i <= n; i++) {
    if (input[i]) {
        let x = i;  // x-coordinate is the index
        let y = decode(parseInt(input[i].base), input[i].value);
        points.push([x, y]);
    }
}

// Use only first k points for interpolation
points = points.slice(0, k);

// ---------- Step 3: Lagrange Interpolation ----------
function lagrangeInterpolation(points) {
    let constant = 0;
    const m = points.length;

    for (let i = 0; i < m; i++) {
        let xi = points[i][0];
        let yi = points[i][1];

        // Calculate Lagrange basis polynomial at x=0
        let term = yi;
        for (let j = 0; j < m; j++) {
            if (i !== j) {
                let xj = points[j][0];
                term *= (0 - xj) / (xi - xj);
            }
        }
        constant += term;
    }
    return Math.round(constant); // since values should be integers
}

// ---------- Step 4: Output ----------
console.log("Constant term (C):", lagrangeInterpolation(points));
