const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  console.log('celsius: ' + celsius);
  const roundedCelsius = Math.round(celsius * 10) / 10;
  console.log('roundedCelsius: ' + roundedCelsius);
  return roundedCelsius;

};

const convertToFahrenheit = function(degrees) {
  const fahrenheit = (degrees * (9/5)) + 32;
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
