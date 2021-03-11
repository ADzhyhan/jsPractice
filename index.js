//task1 
let arr = [{
  a: 1,
  b: 2
}, {
  a: 2,
  c: 3
}, {
  a: 1,
  b: 2
}];

let result = arr.reduce(function (unique, value) {
  if (
    unique.every(function (item) {
      return !(item.t === value.t && item.b === value.b);
    })
  )
    unique.push(value);
  return unique;
}, []);

console.log(result);

//task2 