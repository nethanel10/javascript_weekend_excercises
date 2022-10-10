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
      
      