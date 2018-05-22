import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-exercise';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  exercises = EXERCISES;

  selectedExercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

  onSelect(exercise: Exercise): void {
    this.selectedExercise = exercise;
  }
}
