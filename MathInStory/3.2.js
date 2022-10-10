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