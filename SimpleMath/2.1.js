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
