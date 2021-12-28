var isPalindrome = function (x) {
  x = x.toString();
  var isPal = true;
  for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
    console.log(x[x.length - 1]);
    if (x[i] === x[x.length - i]) {
      console.log(x[i]);
      console.log(x[x.length - i]);
      isPal = true;
    }
    if (x[i] !== x[x.length - i]) {
      return false;
    }
  }
  return isPal;
};

console.log(isPalindrome(167849));
console.log("hello world");

