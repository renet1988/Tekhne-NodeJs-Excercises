function fibonacci(aux) {
  if (aux === 1 || aux === 2) {
    return 1 ;
  } else {
    return ( fibonacci( aux - 1 ) + fibonacci( aux - 2 ));
  }
}
console.log(fibonacci(6));