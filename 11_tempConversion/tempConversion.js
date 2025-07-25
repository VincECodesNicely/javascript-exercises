const convertToCelsius = function (fahrenheit) {
  let convertCelsius = ((fahrenheit - 32) * 5) / 9;
  let roundedConvertCelsius = convertCelsius.toFixed(1);
  return (floatCelsius = parseFloat(roundedConvertCelsius));
};

const convertToFahrenheit = function (celsius) {
  let convertFahrenheit = (celsius * 9) / 5 + 32;
  let roundedFahrenheit = convertFahrenheit.toFixed(1);
  return (floatFahrenheit = parseFloat(roundedFahrenheit));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
