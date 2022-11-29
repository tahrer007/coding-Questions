function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  //use the array to save the unique values by pointers
  let counter = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[counter] == arr[j]) continue;
    counter++;
    arr[counter] = arr[j];
  }

  return  (counter)?counter+1 : 0;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 7, 7, 7, 8]));
