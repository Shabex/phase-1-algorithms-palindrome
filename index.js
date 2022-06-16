function reverse(wrd) {
  let rev_wrd = "";
  for (let i = wrd.length-1 ; i>=0; i--) {
    
    rev_wrd+=wrd[i];

  }
  return rev_wrd
}
function isPalindrome(wrd) {
  reverse_wrd = reverse(wrd);
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
