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
  