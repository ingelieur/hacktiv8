function times (x) {
  result = x;
  for (i=x-1; i>0; i--) {
    result = result * i;
  }
  return result;
}

function times2 (x,y) {
  result = x;
  for (i = x-y; i>0 ; i-=y) {
    result = result*i;
  }
  return result;
}

console.log(times(5));
console.log(times2(12,5));
