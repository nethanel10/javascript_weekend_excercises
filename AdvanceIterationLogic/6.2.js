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
    