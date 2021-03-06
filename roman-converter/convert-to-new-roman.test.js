/*

1000		Cat 
900			Cat 
500			Cat 
400			Cat 
100			Cat 
90			Cat 
50			Cat 
40			Cat 
10			Cat 
5			Cat 
4			Cat 
1			Cat 

1			I
5			V
10			X
50			L
100			C
500			D
1000		M

*/

function convertToNewRoman(number) {
    // ToDo: do the proper implementation using TDD
    // return 'I';
    if ((typeof number !== 'number') || (number < 0)) return;
    var romanNum = ''; 
    var romanRanges = [ 
    	{ rangeBase: 1000, rangeLetter: 'M', nextRange: 100},
    	{ rangeBase: 500, rangeLetter: 'D', nextRange: 100},
    	{ rangeBase: 100, rangeLetter: 'C', nextRange: 10},
    	{ rangeBase: 50, rangeLetter: 'L', nextRange: 10},
    	{ rangeBase: 10, rangeLetter: 'X', nextRange: 1},
    	{ rangeBase: 5, rangeLetter: 'V', nextRange: 1},
    	{ rangeBase: 1, rangeLetter: 'I', nextRange: -1}
    ];
    if (number ===  0) return '';
    for (let i = 0; i < romanRanges.length; i++){
    	if (number >= romanRanges[i].rangeBase) {
    		return romanRanges[i].rangeLetter + convertToNewRoman(number - romanRanges[i].rangeBase);
    	} else if (number >= (romanRanges[i].rangeBase - romanRanges[i].nextRange)) {
    		let nextRangeIndex = romanRanges.map(romanRange => romanRange.rangeBase).indexOf(romanRanges[i].nextRange);
    		return romanRanges[nextRangeIndex].rangeLetter + romanRanges[i].rangeLetter + convertToNewRoman(number - romanRanges[i].rangeBase + romanRanges[nextRangeIndex].rangeBase);
    	}
    }

}


/* write the tests */
test('convertToNewRoman should return I for 1', function() {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});

test('convertToNewRoman should return CXXV for 125', function() {
    var result = convertToNewRoman(125);
    expect(result).toBe('CXXV');
});

test('convertToNewRoman should return CCXLIV for 244', function() {
    var result = convertToNewRoman(244);
    expect(result).toBe('CCXLIV');
});

test('convertToNewRoman should return MCMLXXVI for 1976', function() {
    var result = convertToNewRoman(1976);
    expect(result).toBe('MCMLXXVI');
});



