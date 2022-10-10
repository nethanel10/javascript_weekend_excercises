  //*4.2
  
  const tribonacci = (n) => {
    let sign = [1, 1, 1]
    for (let i = 3; i < n; i++) sign.push(sign[i-3] + sign[i-2] + sign[i-1])
    return sign
  }
  
  console.log(tribonacci(10));
  