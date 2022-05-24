function countZero(start, end) {
  let count = 0;
  for (i = start; i <= end; i++) {
    let numericString = i.toString();
    let arr = numericString.split("");
    for (j = 0; j < arr.length; j++) {
      if (arr[j] == "0") {
        count = count + 1;
      }
    }
  }
  console.log(`Total number of Zero between ${start} to ${end} is ${count}`);
}
countZero(1, 50);
