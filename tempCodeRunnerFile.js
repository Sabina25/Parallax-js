function findX(arr, x) {
  arr.forEach((i) => {
    for (let j = 1; j <= arr.length; i++) {
      if (i + j == x) {
        console.log("yeps");
      }
    }
  });
}

findX([1, 2, 3, 4, 5], 7);