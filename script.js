function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

}
  let roman = "";

  // Loop through the object values
  for (let i = 0; i <= 6; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    // Add the symbol while num is greater than or equal to value
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  // Handle subtractive notation replacements
  roman = roman
    .replace(/DCCCC/g, "CM") // 900
    .replace(/CCCC/g, "CD")  // 400
    .replace(/LXXXX/g, "XC") // 90
    .replace(/XXXX/g, "XL")  // 40
    .replace(/VIIII/g, "IX") // 9
    .replace(/IIII/g, "IV"); // 4

  return roman;
}

// Example tests:
// console.log(convertToRoman(14));   // XIV
// console.log(convertToRoman(798));  // DCCXCVIII
// console.log(convertToRoman(36));   // XXXVI

// do not edit below this line
module.exports = convertToRoman
