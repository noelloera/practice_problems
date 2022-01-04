//Function takes in an array of numbers calculates the percentage of postive, negative and zero numbers in the array
//O(n^2) Quadratic time

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zer++;
    }
  }
  if (pos) {
    pos = pos / arr.length;
    console.log(sixDecimals(pos));
  } else {
    console.log(pos);
  }
  if (neg) {
    neg = neg / arr.length;
    console.log(sixDecimals(neg));
  } else {
    console.log(neg);
  }
  if (zer) {
    zer = zer / arr.length;
    console.log(sixDecimals(zer));
  } else {
    console.log(zer);
  }
}

function sixDecimals(num) {
  num = num.toString();
  num = num.slice(0, num.indexOf(".") + 7);
  return Number(num);
}
//Try and simplify the way the function is written as well as ensuring 6 values after decimal are displayed
plusMinus([-2, 2, 1, -1, -4, -2]);
