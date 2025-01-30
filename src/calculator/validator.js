export const isNumber = (value) => {
  return typeof value === 'number' && !isNaN(value);
};

export const validateInputs = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Invalid input: both arguments must be numbers');
  }
  return true;
};

export const isPositive = (number) => {
  return isNumber(number) && number > 0;
};
