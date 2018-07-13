var reader = require("read-console");
reader.read("Ingresar un numero: ", (aux)=> {
  console.log(evaluator(aux));
});


function evaluator(cadena) {
  const bool = cadEvaluator(cadena);
  if ( bool ) {
    const aux = eval(cadena);
    console.log( aux );
  } else {
    console.log('La cadena ingresada contiene datos que no son numero u operadores aritmeticos');
  }
}

function  cadEvaluator(cad) {
    let bool = true;
    let i = 0;
    while (bool === true && i < cad.length) {
      const aux = cad.charAt(i);
      if (!isNaN(aux) || isOperator(cad, i)) {
        bool = true;
      } else {
        bool = false;
      }
      i++;
    }
    return bool;
  }

 function isOperator(op, indice) {
    const aux = op.charCodeAt(indice);
    const operadores = [32 , 42 , 43 , 45 , 46 , 47];
    if (operadores.indexOf(aux) !== -1) {
      return true;
    }
    return false;
  }