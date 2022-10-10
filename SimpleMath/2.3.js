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
