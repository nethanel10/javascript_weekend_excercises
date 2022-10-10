  //*5.7
  function ShortestWord(str) {
    var words = str.split(' ');
   var shortest = words.reduce((shortestWord, currentWord) => {
     return currentWord.length < shortestWord.length ? currentWord : shortestWord;
   });
    return shortest;
  }
  console.log(ShortestWord("hello to all" ));
 