// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

};


module.exports = { longestPalindrome };



// Hint 1:
// How can we reuse a previously computed palindrome to compute a larger palindrome?

// Hint 2:
// If “aba” is a palindrome, is “xabax” a palindrome? Similarly is “xabay” a palindrome?

// Hint 3:
// Complexity based hint:
// If we use brute - force and check whether for every start and end position a substring is a palindrome we have O(n ^ 2) start - end pairs and O(n) palindromic checks.Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.
