const express = require("express");
const app = express();
app.use(express.json());

function convertToRoman(num) {
  if (num === 0) return "";

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

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// ******** IMPORTANT: TESTED ENDPOINT ********
app.post("/romanConverter", (req, res) => {
  const num = req.body.input;
  const roman = convertToRoman(num);
  res.json({ roman });
});

app.listen(3000, () => console.log("Server running on port 3000"));
