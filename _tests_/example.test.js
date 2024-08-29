// Example Calculator class implementation
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }

  square(a) {
    return a * a;
  }

  squareRoot(a) {
    if (a < 0) throw new Error('Cannot compute square root of a negative number');
    return Math.sqrt(a);
  }
}

// Unit tests for Calculator class
describe('Calculator class', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(1, -1)).toBe(0);
    });

    test('adds zero to a number', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });

    test('test with sleep', async () => {
       // Perform some setup or actions
      console.log('sleep');

       // Sleep for 1000 milliseconds (1 second)
      await new Promise(resolve => setTimeout(resolve, 1000));
  });

    test('adds two large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts a positive number from a negative number', () => {
      expect(calculator.subtract(-1, 1)).toBe(-2);
    });

    test('subtracts zero from a number', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('subtracts a negative number from a positive number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('subtracts two large numbers', () => {
      expect(calculator.subtract(2000000, 1000000)).toBe(1000000);
    });
  });

  describe('Multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive number by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('multiplies a positive number by a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('multiplies two large numbers', () => {
      expect(calculator.multiply(10000, 10000)).toBe(100000000);
    });
  });

  describe('Division', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divides a negative number by a positive number', () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });

    test('divides zero by a positive number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    
    test('test with sleep again', async () => {
       // Perform some setup or actions
      console.log('sleep again');

       // Sleep for 1000 milliseconds (1 second)
      await new Promise(resolve => setTimeout(resolve, 1000));

  });

    test('divides two large numbers', () => {
      expect(calculator.divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Square and Square Root', () => {
    test('calculates the square of a number', () => {
      expect(calculator.square(4)).toBe(16);
    });

    test('calculates the square of zero', () => {
      expect(calculator.square(0)).toBe(0);
    });

    test('calculates the square of a negative number', () => {
      expect(calculator.square(-4)).toBe(16);
    });

    test('calculates the square root of a positive number', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('throws error for negative input in square root', () => {
      expect(() => calculator.squareRoot(-16)).toThrow('Cannot compute square root of a negative number');
    });
  });
});
