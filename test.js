const { assert } = require('chai');
const { capitalize, reverseString, calculator, caesarCipher }= require('./functions.js'); // Replace 'yourFileName' with the actual filename containing your functions

describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
        assert.equal(capitalize('hello'), 'Hello');
        assert.equal(capitalize('world'), 'World');
        assert.equal(capitalize('test'), 'Test');
    });

    it('should return an empty string if the input is an empty string', () => {
        assert.equal(capitalize(''), '');
    });
});

describe('reverseString', () => {
    it('should reverse a string', () => {
        assert.equal(reverseString('hello'), 'olleh');
        assert.equal(reverseString('world'), 'dlrow');
        assert.equal(reverseString('test'), 'tset');
    });

    it('should return an empty string if the input is an empty string', () => {
        assert.equal(reverseString(''), '');
    });
});

describe('calculator', () => {
    it('should add two numbers', () => {
        assert.equal(calculator(2, 3, 'add'), 5);
    });

    it('should subtract two numbers', () => {
        assert.equal(calculator(5, 3, 'subtract'), 2);
    });

    it('should multiply two numbers', () => {
        assert.equal(calculator(4, 6, 'multiply'), 24);
    });

    it('should divide two numbers', () => {
        assert.equal(calculator(8, 2, 'divide'), 4);
    });
});

describe('caesarCipher', () => {
    it('should shift characters in a string by a given factor', () => {
        assert.equal(caesarCipher('abc', 1), 'bcd');
        assert.equal(caesarCipher('xyz', 3), 'abc');
    });

    it('should wrap from z to a', () => {
        assert.equal(caesarCipher('xyz', 1), 'yza');
    });

    it('should maintain the same case', () => {
        assert.equal(caesarCipher('Hello', 1), 'Ifmmp');
        assert.equal(caesarCipher('Test', 2), 'Vguv');
    });

    it('should handle punctuation and spaces', () => {
        assert.equal(caesarCipher('Hello, World!', 1), 'Ifmmp, Xpsme!');
    });
});
