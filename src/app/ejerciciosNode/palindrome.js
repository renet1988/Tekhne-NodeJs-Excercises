function palindromo(cadena) {
    var a1 = cadena.split("");
    var a2 = a1.slice();
    a1.reverse();
    //console.log(JSON.stringify(a1));
    //console.log(JSON.stringify(a2));
    return console.log(JSON.stringify(a1)==JSON.stringify(a2)); ;
}
console.log(palindromo('radar'));
