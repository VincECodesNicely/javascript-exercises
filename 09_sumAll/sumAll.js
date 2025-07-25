const sumAll = function (firstNum, secondNum) {
  const newArray = [];
  if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))
    return "ERROR";
  if (firstNum < 0 || secondNum < 0) return "ERROR";
  if (firstNum > secondNum) {
    const temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
  }

  for (let i = firstNum; i <= secondNum; i++) {
    newArray.push(i);
  }
  const totalSum = newArray.reduce(
    (accumlator, currentValue) => accumlator + currentValue,
    0
  );
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
