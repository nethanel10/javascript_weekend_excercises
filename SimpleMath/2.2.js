//*2.2
const arr = [1, 0, 1, 1];
const parseArray = arr => {
   const binaryString = arr.join("");
   return parseInt(binaryString, 2);
};
console.log(parseArray(arr));
