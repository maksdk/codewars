function findOdd(arr) {
   const meetings = arr.reduce((acc, num) => {
      const key = num.toString();
      if (acc[key]) {
         acc[key] += 1;
      } else {
         acc[key] = 1;
      }
      return acc;
   }, {});

   const strNum = Object.keys(meetings).find(key => meetings[key] % 2 !== 0);
   return Number(strNum);
}