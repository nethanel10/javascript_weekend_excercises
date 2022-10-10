  //*5.6
  function maskify(str){
    return str.split('').map((letter,id)=>id<str.length-4 ? '#' : letter).join('')
    }
    console.log(maskify("4556364607935616"));
  