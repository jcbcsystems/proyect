import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  proyect: any;

  constructor() { }
  board: Board;

  /* board: Board = new Board('Desarrollo de Sistema', [
    new Column('Por Hacer', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('Haciendo', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('En revisión', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Realizado', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]); */

  ngOnInit() {
    this.proyect = JSON.parse(window.localStorage.getItem('proyect'));
    this.board = new Board(this.proyect.name, this.getColums(this.proyect.stages));
  }

  getColums(columns: any) {
    let column: Column[] = [];
    columns.forEach(stage => {
      let x = new Column(stage.name, this.getTasks(stage.taks));
      column.push(x);
    });

    return column;
  }

  getTasks(taks_aux: any) {
    let taks: string[] = [];
    taks_aux.forEach(element => {
      taks.push(element.name);
    });
    return taks;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
