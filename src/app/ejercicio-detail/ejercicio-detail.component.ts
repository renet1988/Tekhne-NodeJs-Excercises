import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise'

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

}
