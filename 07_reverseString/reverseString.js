const reverseString = function (word) {
  let string = word;
  const reverseWord = string.split("").reverse().join("");
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
