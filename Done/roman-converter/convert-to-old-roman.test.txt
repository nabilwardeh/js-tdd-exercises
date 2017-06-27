function convertToOldRoman(number) {
    // ToDo: do the full implementation using TDD
    return 'I';
}

/* write the tests */
test('convertToOldRoman should return I for 1', function() {
    var result = convertToOldRoman(1);
    expect(result).toBe('I');
});