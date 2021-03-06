/**
 * This function is supposed to remove vowels from a phrase
 * Add tests to prove that it functions properly with these examples at least:
 *         removeVowels("goodbye")  // --> "gdby"
 *         removeVowels("node girls")  // --> "nd grls"
 *         removeVowels('how are you today?') // --> "hw r y tdy?"
 * Consider EDGE cases (how the function behaves if you pass undefined, or a number etc..)
 * Then add a test that contains CAPITAL vowel letters (hEllo for example)
 *      - It should expect the E to be removed
 *      - Run the tests and see you new test fail (RED)
 *      - Change the implementatino to remove the letter (capital and small letters)
 *       (maybe Google Case Insensitive Regular Expressions and read about regular expressions and see how you can use them)
 */

function removeVowels(phrase) {
	if (typeof phrase !== 'string') return;
    return phrase.replace(/[aeiou]/gi, '');
}


// This is a sample test - remove it and write AT LEAST 5 more tests to prove the function works as expected  
test('removeVowels should remove the Os', function(){
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});

test('removeVowels should remove the e and o', function(){
    var result = removeVowels('Hello!');
    expect(result).toBe('Hll!');
});

test('removeVowels should remove the As', function(){
    var result = removeVowels('Baby');
    expect(result).toBe('Bby');
});

test('removeVowels should remove the Is', function(){
    var result = removeVowels('Find iIs');
    expect(result).toBe('Fnd s');
});

test('removeVowels should remove the Us and Es', function(){
    var result = removeVowels('Bus UppEr');
    expect(result).toBe('Bs ppr');
});

test('removeVowels should remove the Os and ', function(){
    var result = removeVowels('AaEeIiOoUu');
    expect(result).toBe('');
});

test('removeVowels should return undefind if a number was passed', function(){
    var result = removeVowels(1234);
    expect(result).toBe( undefined );
});


