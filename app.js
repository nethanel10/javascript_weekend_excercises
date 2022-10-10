//*1.1 
function yesorno(bool){
    if(bool==true){
        return("yes");
    
    }
    else{
    return("no ")
    }
}
console.log(yesorno(true))
//?or
function yesorno1(num){
    if(num<10){
        return("yes");
    
    }
    else{
        return("no ")
    }
}
console.log(yesorno1(5));
//*2.1
  
  function sumTwoSmallestNumbers(numbers) {  
    var ordernum = numbers.sort(function(a,b){return a-b;});
    console.log(ordernum)
    var result=0;
    
    for(i=0; i<ordernum.length; i++){
      if(i==0){
        result+=ordernum[0];
      }
      if(i==1){
        result+=ordernum[1];
      }
    }
    return result;
  };
  
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453] ))
//*2.2
const arr = [1, 0, 1, 1];
const parseArray = arr => {
   const binaryString = arr.join("");
   return parseInt(binaryString, 2);
};
console.log(parseArray(arr));
//*2.3
function findNextSquare(num){
    var stage1;
    var stage2;
    if(Math.sqrt(num)%1 ===0){//*check if the num is perfect 
         stage1=Math.sqrt(num)
         stage2=stage1+1
    }else{
        return -1;
    }
    return stage2*stage2;
}

console.log(findNextSquare(121) )
console.log(findNextSquare(625) )
console.log(findNextSquare(114) )
//*2.4
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

  //*2.5
  function Summation(num){
    let sum=0
    for(let i=0;i<=num;i++){
        sum=sum+i;

    }
    return sum;
  }
  console.log(Summation(8))
  //*2.6
  function centuryFromYear(year) {
    return Math.floor((year-1)/100) + 1;
}

  console.log(centuryFromYear(1705))
  //*2.7
  function basicOp(operation,value1, value2){
if(operation.includes("")){
  return (value1+value2)
}
  }
  console.log(basicOp("@",4,7))
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
function peopleinthebus( busstop){
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
console.log(peopleinthebus([[10,0],[3,5]]))
//*4.1
function Fibonacci(n) {
  // declare the array starting with the first 2 values of the fibonacci sequence
  // starting at array index 1, and push current index + previous index to the array
  for (var fibonacci = [0, 1], i = 1; i < n; i++) 
    fibonacci.push(fibonacci[i] + fibonacci[i - 1])

  return fibonacci;
}

console.log(  Fibonacci(12)  )
//*4.2

const tribonacci = (n) => {
  let sign = [1, 1, 1]
  for (let i = 3; i < n; i++) sign.push(sign[i-3] + sign[i-2] + sign[i-1])
  return sign
}

console.log(tribonacci(10));
//*5.1
function removechar(str){
  let removefirstandlastcharacters;
  removefirstandlastcharacters=str.slice(1,-1);
return removefirstandlastcharacters;
}
console.log(removechar("abc"))
//*5.2
function repeat_str(str,count){
let repeatst=str.repeat(count)
return repeatst;
}
console.log(repeat_str("ab",2))
//*5.3

function tocamelcase(str){
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
console.log(tocamelcase("the-stealth-warrior"))
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
 //*6.1
 function accum (str){
let strarr=[];
for(let i=0;i<str.length;i++){
  strarr.push(Capitalfirstletter(str[i],i+1))
}
return strarr.join("-")
 }

function Capitalfirstletter(str,num){
  let firstletter=str.toUpperCase();
  while(firstletter.length!==num){
    firstletter=firstletter+str.toLowerCase();
  }
  return firstletter;
}
console.log(accum("abcd"))
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

