import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-ejercicio-detail',
  templateUrl: './ejercicio-detail.component.html',
  styleUrls: ['./ejercicio-detail.component.css']
})
export class EjercicioDetailComponent implements OnInit {

  @Input() exercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

  ocultar(): void {
    document.getElementById('ver').style.display = 'none';
  }

  mostrar(): void {
    document.getElementById('oculto').style.display = 'block';
  }

  fibAux(aux) {
    if (aux === 1 || aux === 2) {
      return 1 ;
    } else {
      return ( this.fibAux( aux - 1 ) + this.fibAux( aux - 2 ));
    }
  }

  fibonacci(aux2: number) {
    const res = this.fibAux(aux2);
    console.log(res);
    document.getElementById('resultado').innerHTML = '<h3>El resultado es: </h3>' + res;
  }

  fibonacciArray(x): void {
    const fibo = new Array;
    while ( x > 0) {
      fibo.push(this.fibAux(x));
      x--;
    }
    fibo.reverse();
    console.log(fibo);
    document.getElementById('resultado').innerHTML = '<h3>El resultado es: </h3>' + fibo;
  }

  evaluator(cadena: string) {
    const bool = this.cadEvaluator(cadena);
    if ( bool ) {
      const aux = eval(cadena);
      console.log( aux );
      document.getElementById('resultado').innerHTML = '<h3>El resultado es: </h3>' + aux;
    } else {
      document.getElementById('resultado').innerHTML = 'La cadena ingresada contiene datos que <br>no son numero u operadores aritmeticos';
      console.log('La cadena ingresada contiene datos que no son numero u operadores aritmeticos');
    }
  }

  cadEvaluator(cad) {
    let bool = true;
    let i = 0;
    while (bool === true && i < cad.length) {
      const aux = cad.charAt(i);
      if (!isNaN(aux) || this.isOperator(cad, i)) {
        bool = true;
      } else {
        bool = false;
      }
      i++;
    }
    return bool;
  }

  isOperator(op, indice) {
    const aux = op.charCodeAt(indice);
    const operadores = [32 , 42 , 43 , 45 , 46 , 47];
    if (operadores.indexOf(aux) !== -1) {
      return true;
    }
    return false;
  }

  evaluator2(cadena: string) {
    const bool = this.cadEvaluator2(cadena);
    if ( bool ) {
      const aux = eval(cadena);
      console.log( aux );
      document.getElementById('resultado').innerHTML = '<h3>El resultado es: </h3>' + aux;
    } else {
      document.getElementById('resultado').innerHTML = 'La cadena ingresada contiene datos que <br>no son numero u operadores aritmeticos';
      console.log('La cadena ingresada contiene datos que no son numero u operadores aritmeticos');
    }
  }

  cadEvaluator2(cad) {
    let bool = true;
    let i = 0;
    while (bool === true && i < cad.length) {
      const aux = cad.charAt(i);
      if (!isNaN(aux) || this.isOperator2(cad, i)) {
        bool = true;
      } else {
        bool = false;
      }
      i++;
    }
    return bool;
  }

  isOperator2(op, indice) {
    const aux = op.charCodeAt(indice);
    const operadores = [32 , 40 , 41 , 42 , 43 , 45 , 46 , 47 , 91 , 93 , 123 , 125];
    if (operadores.indexOf(aux) !== -1) {
      return true;
    }
    return false;
  }
}
