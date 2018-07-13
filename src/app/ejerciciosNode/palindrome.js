var reader = require("read-console");
reader.read("Ingresar un numero: ", (aux)=> {
  console.log(palindromo(aux));
 
});

function palindromo(cadena) {
    var a1 = cadena.split("");
    var a2 = a1.slice();
    a1.reverse();
    return console.log(JSON.stringify(a1)==JSON.stringify(a2)); ;
}
//console.log(palindromo('radar'));
