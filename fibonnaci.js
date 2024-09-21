function fibs(number) {
  let fibSequence = [0, 1, 1];
  for (let i = 3; i < number; i++) {
    const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNumber);
  }
  return fibSequence;
}

function fibsRecursive(number) {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    let array = fibsRecursive(number - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
}

console.log(fibsRecursive(8));

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    result = result.concat(left.slice(leftIndex));
    result = result.concat(right.slice(rightIndex));
    return result;
  }
}

console.log(mergeSort([0, 1, 1, 2, 3, 5, 8, 13]));
console.log(mergeSort([105, 79, 100, 110]));
