function times (x) {
  if (x === 1) {
    result = 1;
  }
  else {
    result = x * times(x-1);
  }
  return result;
}

function times2 (x,y) {
  if (x < y) {
    result = x%y;
  }
  else { 
    result = x * times2((x-y),y);
  }
  return result;
}

console.log(times(5));
console.log(times2(12,5));
