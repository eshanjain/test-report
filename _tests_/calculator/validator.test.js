// tests/calculator/validator.test.js
import { isNumber, validateInputs, isPositive } from '../../src/calculator/validator';

describe('Calculator Input Validation', () => {
  test('isNumber validation works correctly', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(-123)).toBe(true);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  test('validateInputs works correctly', () => {
    expect(validateInputs(1, 2)).toBe(true);
    expect(() => validateInputs('1', 2)).toThrow('Invalid input');
    expect(() => validateInputs(1, '2')).toThrow('Invalid input');
  });

  test('isPositive validation works correctly', () => {
    expect(isPositive(5)).toBe(true);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-5)).toBe(false);
    expect(isPositive('5')).toBe(false);
  });
});
