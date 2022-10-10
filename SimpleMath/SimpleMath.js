//*2.1
  
function sumTwoSmallestNumbers(numbers) {  
    var ordernum = numbers.sort(function(a,b){return a-b;});
    console.log(ordernum)
    var result=0;
    
    for(i=0; i<ordernum.length; i++){
      if(i==0){
        result+=ordernum[0];
      }
      if(i==1){
        result+=ordernum[1];
      }
    }
    return result;
  };
  
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453] ))
//*2.2
const arr = [1, 0, 1, 1];
const parseArray = arr => {
   const binaryString = arr.join("");
   return parseInt(binaryString, 2);
};
console.log(parseArray(arr));
//*2.3
function findNextSquare(num){
    var stage1;
    var stage2;
    if(Math.sqrt(num)%1 ===0){//*check if the num is perfect 
         stage1=Math.sqrt(num)
         stage2=stage1+1
    }else{
        return -1;
    }
    return stage2*stage2;
}

console.log(findNextSquare(121) )
console.log(findNextSquare(625) )
console.log(findNextSquare(114) )
//*2.4
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

  //*2.5
  function Summation(num){
    let sum=0
    for(let i=0;i<=num;i++){
        sum=sum+i;

    }
    return sum;
  }
  console.log(Summation(8))
  //*2.6
  function centuryFromYear(year) {
    return Math.floor((year-1)/100) + 1;
}

  console.log(centuryFromYear(1705))
  //*2.7
  function basicOp(operation,value1, value2){
if(operation.includes("")){
  return (value1+value2)
}
  }
  console.log(basicOp("@",4,7))
