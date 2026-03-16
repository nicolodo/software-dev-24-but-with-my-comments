function fizzBuzz1(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

fizzBuzz1(10)

function fizzBuzz2(n)
{
  //
  const result=[];
  
  for(let i=1; i<=n; i++) {
    if(i%3===0 && i%5===0){
      result.push("FizzBuzz");
    }else if(i%3===0){
      result.push("Fizz");
    }else if(i%5===0){
      result.push("Buzz");
    }else{
      result.push(i);
    }
  }return result;
}

console.log(fizzBuzz2(10))
console.log(fizzBuzz1(100))
// % returns the remainder of a division

// 5 % 5 = 0
// 6 % 4 = 2


Number.isInteger(5 / 5)
Number.isInteger(3 / 5)


function fizzBuzz3(n) {
    const result = []
    for (let i = 1; i < n; i++) {
        if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
            result.push('FizzBuzz')
        } else if (Number.isInteger( i / 3)) {
            result.push('Fizz')
        } else if (Number.isInteger(i / 5)) {
            result.push('Buzz')
        } else {
            result.push(i)
        }
    }
    return result
}

console.log(fizzBuzz3(10))