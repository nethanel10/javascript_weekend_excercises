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
    //*6.2
    function CountingDuplicates(str){
    let originalstr=str.toLowerCase().split("")
    let countrepletter=[];
    let count=1;
    for(let  i=0;i<originalstr.length;i++){
    if(originalstr[i]==originalstr[i+1]){
      count++;
    }
    else{
      let val=` ${count} of ${originalstr[i]}`
      countrepletter=[...countrepletter,val]
      count=1;
    }
    }
    return countrepletter.join("");
    }
    console.log(CountingDuplicates("aA11"))
    //*6.3
    function  organizestrings (s1, s2) {
      var twostring = s1.concat(s2);
      var twostringaftersorting = removeDuplicatesletter(twostring).split("").sort();
      
      return twostringaftersorting.join("");
    }
    
    function removeDuplicatesletter(str) {
      var result = "";
      for(var i = 0; i < str.length; i++) {
        if(result.indexOf(str[i]) == -1) {
          result=result+str[i];
        }
      }
      return result;
    }
    let a="xyaabbbccccdefww"
    let b="xxxxyyyyabklmopq"
    console.log(organizestrings(a,b))
    //*6.4
    function isIsogram(str) {
      str=str.toLowerCase();
      for(var i=0;i<str.length-1;++i) {
       var charcter = str[i]
       if(str.indexOf(charcter,i+1) !== -1) return false;
       }
       return true;
       }
       console.log(isIsogram("Dermatoglyphics"))
       console.log(isIsogram("aba"))
       console.log(isIsogram("moOse"))
    
    