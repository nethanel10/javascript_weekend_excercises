  //*5.4
  toWeirdCase=(str)=>[...str].map((letter,i)=>i%2?letter.toLowerCase():letter.toUpperCase()).join('');
  console.log(toWeirdCase('String'));
