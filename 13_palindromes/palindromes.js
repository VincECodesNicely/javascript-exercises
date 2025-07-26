const palindromes = function (palindrome) {
  const cleaned = palindrome.toLowerCase().replace(/[\W_]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
