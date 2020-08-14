// returns sum
function add(x, y) {
    return x+y;
}
console.log(add(2, 3));   

//Max
function getMax(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}
console.log(getMax(20,3,5)); 

//even or odd
function oddOrEven(num){
    if(num % 2 == 0)
        return "even";
    return "odd";
}
console.log(oddOrEven(5));

//extra credit
var fibonacciSeries = function (n) 
{
  if (n === 2) 
  {
    return [1, 1];
  }else 
  {
    var s = fibonacciSeries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacciSeries(6));