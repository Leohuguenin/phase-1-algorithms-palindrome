
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

/* 
  create a function that receives one argument, a word
  reverse the word
  check if the reversed word is the same as the original word 
  if it is, return true
  if not return false 
*/

/*
  The function compares the original word with its reversed version, if they match, it's a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
