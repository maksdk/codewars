function persistence(num) {
   //code me

   const iter = (str, index) => {
      str = str.toString();

      if (str.length === 1) return index;

      const result = str.split("").reduce((acc, elem) => {
         return acc * (elem * 1);
      }, 1);

      index += 1;

      return iter(result, index);
   };

   return iter(num, 0);
};