const removeFromArray = function (arr, ...num) {
  const newArray = [];
  //array for loop
  //if num doesn't include item
  //push the item into the the new of the new array.
  arr.forEach((item) => {
    if (!num.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
