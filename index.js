//task1 
let arr = [{ a: 1, b: 2}, {a: 2, c: 3}, { a: 1, b: 2 }];

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
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let i = -1; 

function loop(arr) {
  i++; 
  if (i < arr.length) {
    console.log(arr[i]);
    loop(arr);
  }
}

loop(array);

//task3 
function transliterate(word) {
  const result = [];
  const letters = ["А", "В", "С", "Н", "І", "К", "М", "а", "с", "е", "р", "і", "о", "х", "у"];
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i]) && !result.includes(word[i])) { 
      result.push(word[i]);
    }
  }
  console.log(result);
}
transliterate("дерево");