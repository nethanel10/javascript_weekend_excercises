 //*6.1
 function accum (str){
    let strarr=[];
    for(let i=0;i<str.length;i++){
      strarr.push(Capitalfirstletter(str[i],i+1))
    }
    return strarr.join("-")
     }
    
    function Capitalfirstletter(str,num){
      let firstletter=str.toUpperCase();
      while(firstletter.length!==num){
        firstletter=firstletter+str.toLowerCase();
      }
      return firstletter;
    }
    console.log(accum("abcd"))
