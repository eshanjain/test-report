// tests/calculator/advancedOperations.test.js
import { power, squareRoot, percentage } from '../../src/calculator/advancedOperations';

describe('Advanced Calculator Operations', () => {
  test('power calculation works correctly', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(3, 2)).toBe(9);
    expect(power(5, 0)).toBe(1);
  });

  test('square root calculation works correctly', () => {
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
    expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
  });

  test('percentage calculation works correctly', () => {
    expect(percentage(100, 50)).toBe(50);
    expect(percentage(200, 10)).toBe(20);
    expect(percentage(1000, 5)).toBe(50);
  });
});
