//*3.1
function nbYear(p0, percent, aug, p) {

    var populationperc = p0 * percent/100;
    
    populationtotal = p0 + (populationperc) + aug ;
    
    var numbersofyears = 1;
    
    while(populationtotal < p)
    {        
    
        populationperc = populationtotal * percent/100;
            populationtotal = populationtotal + populationperc + aug;
            numbersofyears += 1;
        
     }
              
            return numbersofyears;
    } 
console.log(nbYear(1500, 5, 100, 5000))
//*3.2
function peopleInTheBus( busstop){
  let total=0
  for(let i=0;i<busstop.length;i++){
    let currentnum=busstop[i];
    let geton=currentnum[0]
    let getoff=currentnum[1];
total=total+geton;
total=total-getoff;
  }
  return total;

}
console.log(peopleInTheBus([[10,0],[3,5]]));