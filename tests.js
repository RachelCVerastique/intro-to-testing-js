// // Unit tests for the helloWorld function
describe('helloWorld', function() {

    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });

    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });

    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });

    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {

    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });

    it('should return a string when called', function () {
       expect(typeof sayHello()).toBe("boolean");
     });

    it('should return the string "Hello, Jane!" when executed', function() {
       expect(sayHello("Jane")).toBe("Hello, Jane!");
     });

    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

})

describe('isFive', function() {

    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });

    it('should return 5 when called', function() {
        expect(isFive(5)).toBe(true);
    });

    it('should return true when the string "5" is passed through', function() {
        expect(isFive("5")).toBe(true);
    });
})


describe('isEven', function() {

    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });

    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });

    it('should return true when 2 is called', function () {
        expect(isEven(2)).toBe(true);
    });

    it('should return true when -4 is called', function () {
        expect(isEven(-4)).toBe(true);
    });

    it('should return false when 3 is called', function () {
        expect(isEven(3)).toBe(false);
    });

    it('should return false when string "banana" is called', function () {
        expect(isEven("banana")).toBe(false);
    });

    it('should return true when string "8" is called', function () {
        expect(isEven("8")).toBe(true);
    });

    it('should return false when string Infinity is called', function () {
        expect(isEven(Infinity)).toBe(false);
    });

    it('should return false when called with a boolean', function () {
        expect(isEven(true, false)).toBe(false);
    });

    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function() {

    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });

    it('should always a boolean when called ', function () {
        expect(typeof isVowel()).toBe('boolean');
    });

    it('should return true when string "a" is called', function () {
        expect(isVowel("a")).toBe(true);
    });

    it('should return true when string "A" is called', function () {
        expect(isVowel("A")).toBe(true);
    });

    it('should return false when string "y" is called ', function () {
        expect(isVowel("y")).toBe(false);
    });

    it('should return false if number 4 is called', function () {
        expect(isVowel(4)).toBe(false);
    });

    it('should return false when called with a boolean', function () {
        expect(isVowel(true, false)).toBe(false);
    });

    it('should return false when string "banana" is called', function () {
        expect(isVowel('banana')).toBe(false);
    });

    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);

    });
})