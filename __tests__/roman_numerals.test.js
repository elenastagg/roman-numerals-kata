const toRomanNumeral = require("../src/roman_numerals");

describe("roman numerals", () => {
  it("turns 1 into I", () => {
    expect(toRomanNumeral(1)).toBe("I");
  });

  it("turns 2 into II", () => {
    expect(toRomanNumeral(2)).toBe("II");
  });

  it("turns 3 into III", () => {
    expect(toRomanNumeral(3)).toBe("III");
  });

  it("turns 4 into IV", () => {
    expect(toRomanNumeral(4)).toBe("IV");
  });

  it("turns 5 into V", () => {
    expect(toRomanNumeral(5)).toBe("V");
  });

  it("turns 6 into VI", () => {
    expect(toRomanNumeral(6)).toBe("VI");
  });

  it("turns 7 into VII", () => {
    expect(toRomanNumeral(7)).toBe("VII");
  });

  it("turns 8 into VIII", () => {
    expect(toRomanNumeral(8)).toBe("VIII");
  });

  it("turns 9 into IX", () => {
    expect(toRomanNumeral(9)).toBe("IX");
  });

  it("turns 10 into X", () => {
    expect(toRomanNumeral(10)).toBe("X");
  });

  it("turns 20 into XX", () => {
    expect(toRomanNumeral(20)).toBe("XX");
  });

  it("turns 50 into L", () => {
    expect(toRomanNumeral(50)).toBe("L");
  });

  it("turns 200 into CC", () => {
    expect(toRomanNumeral(200)).toBe("CC");
  });

  it("turns 500 into D", () => {
    expect(toRomanNumeral(500)).toBe("D");
  });

  it("turns 2000 into MM", () => {
    expect(toRomanNumeral(2000)).toBe("MM");
  });

  it("turns 2133 into MMCXXXIII", () => {
    expect(toRomanNumeral(2133)).toBe("MMCXXXIII");
  });

  it("turns 3999 into MMMCMXCIX", () => {
    expect(toRomanNumeral(3999)).toBe("MMMCMXCIX");
  });
});
