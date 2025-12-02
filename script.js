function convertToRoman(num) {
    if (num === 0) return ""; // Roman numerals have no zero

    // Roman numeral mapping
    const romanMap = [
        { value: 100000, symbol: "ↈ" },    // Ten times 10k (Unicode)
        { value: 50000, symbol: "ↇ" },     // Five times 10k
        { value: 10000, symbol: "ↂ" },     // 10,000
        { value: 9000, symbol: "Mↂ" },
        { value: 5000, symbol: "ↁ" },      // 5,000
        { value: 4000, symbol: "Mↁ" },
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }

    return result.toUpperCase();
}
