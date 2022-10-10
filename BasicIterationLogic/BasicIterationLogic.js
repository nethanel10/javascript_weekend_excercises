//*5.1
function removechar(str){
    let removefirstandlastcharacters;
    removefirstandlastcharacters=str.slice(1,-1);
  return removefirstandlastcharacters;
  }
  console.log(removechar("abc"))
  //*5.2
  function repeat_Str(str,count){
  let repeatst=str.repeat(count)
  return repeatst;
  }
  console.log(repeat_Str("ab",2))
  //*5.3
  
  function toCamelCase(str){
    let strsplit;
    if(str===" "){
      return " ";
    }
    if(str.indexOf("-")!==-1){
  strsplit=str.split("-")
    }
    else{
      strsplit.split("_");
    }
    let capitalstring=strsplit[0];
    for(let i=1; i<strsplit.length;i++){
      capitalstring+=capitalize(strsplit[i])
    }
  
  
  return capitalstring;  
  }
  let capitalize=(str)=>{
    return str[0].toUpperCase() + str.slice(1)
  }
  console.log(toCamelCase("the-stealth-warrior"))
  //*5.4
  toWeirdCase=(str)=>[...str].map((letter,i)=>i%2?letter.toLowerCase():letter.toUpperCase()).join('');
  console.log(toWeirdCase('String'));
  //*5.5
  function abbreviateName(name) {
    return (
      name
        .split(" ")
  
        .map((part) => part[0].toUpperCase())
  
        .join(".")
    );
  }
  console.log(abbreviateName("Sam Harris"));
  //*5.6
  function maskify(str){
  return str.split('').map((letter,id)=>id<str.length-4 ? '#' : letter).join('')
  }
  console.log(maskify("4556364607935616"));
  //*5.7
   function ShortestWord(str) {
     var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    });
     return shortest;
   }
   console.log(ShortestWord("hello to all" ));
  