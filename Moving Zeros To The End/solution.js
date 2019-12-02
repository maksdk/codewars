const moveZeros = function (arr) {
   const right = [];
   const left = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) right.push(arr[i]);
      else left.push(arr[i]);
   }

   return [...left, ...right];
}