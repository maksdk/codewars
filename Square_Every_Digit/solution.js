function squareDigits(num) {
   //may the code be with you
   const numStr = num.toString();
   const arr = numStr.split("");

   const result = arr.reduce((acc, elem) => {
      const sq = (elem * 1) * (elem * 1);
      return acc + sq;
   }, "");
   return result * 1;
}