var longestPalindrome = function (s) {
    let longestPalLength = 0
    let longestPalLeft = 0
    let longestPalRight = 0

    // function to find longest palindrome
    var getLongestPalindrome = function (leftPosition, rightPosition) {
        
        // if its a palindrome, expand from center
        while (
            leftPosition >= 0 &&
            rightPosition < s.length &&
            s[leftPosition] === s[rightPosition]
        ) {
            leftPosition--;
            rightPosition++;
        }

        //store the longest palindrome
        if (rightPosition - leftPosition - 1 > longestPalLength) {
            // due expansion left position needs to + 1
            // as testcase 1 "babad", left position is at -1
            longestPalLeft = leftPosition + 1;
            // due expansion right position needs to - 1
            // as testcase 1 "babad", right position is at 3
            longestPalRight = rightPosition - 1;
            longestPalLength = rightPosition - leftPosition - 1
        }

    };


    for (let i = 0; i < s.length; i++) {

        // find longest odd number palindrome
        getLongestPalindrome(i, i);

        // find longest even number palindrome
        getLongestPalindrome(i, i+1);
    };

    // return longest palindrome string 
    return s.slice(longestPalLeft, longestPalRight + 1);

};