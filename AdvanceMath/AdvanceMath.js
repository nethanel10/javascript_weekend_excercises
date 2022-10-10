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
  