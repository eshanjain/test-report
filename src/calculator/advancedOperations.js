export const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

export const squareRoot = (number) => {
  if (number < 0) throw new Error('Cannot calculate square root of negative number');
  return Math.sqrt(number);
};

export const percentage = (number, percent) => {
  return (number * percent) / 100;
};
