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
