const express = require("express");
const app = express();
app.use(express.json());

function convertToRoman(num) {
  if (num === 0) return "";

  // Extended Roman mapping to support numbers up to 100000
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  // Handle numbers >= 4000 by repeating M
  let thousands = Math.floor(num / 1000);
  if (thousands > 0) {
    result += "M".repeat(thousands);
    num = num % 1000;
  }

  // Handle remaining part using standard Roman logic
  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result.toUpperCase();
}

// ******** IMPORTANT: TESTED ENDPOINT ********
app.post("/romanConverter", (req, res) => {
  const num = req.body.input;
  const roman = convertToRoman(num);
  res.json({ roman });
});

app.listen(3000, () => console.log("Server running on port 3000"));
