var reader = require("read-console");
reader.read("Ingresar un numero: ", (aux)=> {
  console.log(fibonacci(aux));
 
});


var a = [3,5,1];
var b = [1,8,9];

function union (a,b){
  return [...a, ...b];
}

function intersect(a,b){
  return a.filter(x=>b.includes(x));
}

function diference(a,b){
  return [...a.filter(x=>!b.includes(x)),...b.filter(x=>!a.includes(x))];
}

console.log(a);
console.log(b);
console.log(union(a,b));
console.log(intersect(a,b));
console.log(diference(a,b));