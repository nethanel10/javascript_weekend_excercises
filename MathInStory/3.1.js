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


