// tests/calculator/basicOperations.test.js
import { add, subtract, multiply, divide } from '../../src/calculator/basicOperations';

describe('Basic Calculator Operations', () => {
  test('addition works correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('subtraction works correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 1)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('multiplication works correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test('division works correctly', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(4, 0)).toThrow('Division by zero');
  });
});
