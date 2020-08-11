const ones = ["I", "X", "C", "M"];
const fives = ["V", "L", "D"];
const fours = ["IV", "XL", "CD"];
const nines = ["IX", "XC", "CM"];

const toRomanNumeral = (number) => {
  let numerals = [];

  const digits = number.toString().split("").reverse();

  for (let unit = 0; unit < digits.length; unit += 1) {
    let numeral = "";

    const d = parseInt(digits[unit]);

    if (d === 4) {
      numeral = fours[unit];
    } else if (d === 9) {
      numeral = nines[unit];
    } else {
      for (let n = 1; n <= d; n += 1) {
        if (n === 5) {
          numeral = fives[unit];
        } else {
          numeral = numeral.concat(ones[unit]);
        }
      }
    }
    numerals.push(numeral);
  }

  return numerals.reverse().join("");
};

module.exports = toRomanNumeral;
