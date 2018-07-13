var reader = require("read-console");
reader.read("Ingresar un numero: ", (aux)=> {
  console.log(fibonacci(aux));
 
});

function fibonacci(aux) {
  if (aux === 1 || aux === 2) {
    return 1 ;
  } else {
    return ( fibonacci( aux - 1 ) + fibonacci( aux - 2 ));
  }
}