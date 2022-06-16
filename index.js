//write a fxn to revers the string
function reverse(wrd) {
  // define a variable that holds an empty reverse string the use for loop to iterate
  let rev_wrd = "";
  for (let i = wrd.length-1 ; i>=0; i--) {
    
    rev_wrd+=wrd[i];

  }
  //return the reverse string
  return rev_wrd
}
//function to check if the string is palindrome or not
function isPalindrome(wrd) {
  reverse_wrd = reverse(wrd);
  //condition to check if the reverse wrd is 
  //same as wrd it is a palindrome
  //else not a palindrome
  if (reverse_wrd === wrd) {
    return true;
  } else {
    return false;
  }
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
