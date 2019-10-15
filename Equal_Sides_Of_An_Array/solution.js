function findEvenIndex(arr) {
   //Code goes here!
   for (let i = 0; i < arr.length; i++) {
      const sum1 = getSum(arr, i, -1);
      const sum2 = getSum(arr, i, 1);
      if (sum1 === sum2) return i;
   }

   return -1;
}

function getSum(coll, from, dir) {
   let i = from + dir;
   let sum = 0;
   while (Number.isInteger(coll[i])) {
      sum += coll[i];
      i += dir;
   }
   return sum;
}