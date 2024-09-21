function sumRange(n) {
  if (n === 1) {
    return 1;
  } else {
    return (n += sumRange(n - 1));
  }
}

const answer = sumRange(5);
console.log(answer);

function power(a, b) {
  if (b === 0) {
    return 1;
  } else if (b === 1) {
    return a;
  } else {
    return a * power(a, b - 1);
  }
}

const answer2 = power(4, 2);
console.log(answer2);

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const answer3 = factorial(10);
console.log(answer3);

function all(array, callback) {
  let copy = copy || array.slice();

  if (copy.length === 0) {
    return true;
  } else if (callback(copy[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  }
}

function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array.shift() * productOfArray(array);
  }
}

const answer5 = productOfArray([1, 2, 3]);
console.log(answer5);

function contains(object, item) {
  for (var key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], item);
    }
    if (object[key] === item) {
      return true;
    }
  }
  return false;
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};

console.log(contains(obj, 3));
console.log(contains(obj, 5));

function totalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total++;
  }
  return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);
console.log(seven);

function SumSquares(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    sum += SumSquares(first);
  } else if (Number.isInteger(first)) {
    sum += first * first;
  }
  return sum + SumSquares(array);
}
var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function replicate(times, number) {
  let Array = [];
  if (times <= 0) {
    return Array;
  } else {
    times--;
    Array.push(number);
    return replicate(times, number).concat(Array);
  }
}

console.log(replicate(3, 5)); // [5, 5, 5]

console.log(replicate(5, 69)); // [69]
