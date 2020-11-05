import { Component, OnInit } from '@angular/core';
import {todo} from './todo';
import {CalculServiceService} from '../Service/calcul-service.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})

export class TodoListComponentComponent implements OnInit {
  NumBtodo: number = 0;
  liste: todo [] = [
    {userId: 1,id: 1, title: 'bonjour', completed: false},
    {userId: 1,id: 2, title: 'Aaslema', completed: false},
    {userId: 1,id: 3, title: 'Holla', completed: false},
    {userId: 1,id: 4, title: 'Hello', completed: true},
  ];
  constructor(private calcule: CalculServiceService) { }

  ngOnInit(): void {
  }

  getNumberd() {
    this.NumBtodo = this.calcule.getNumberOf(this.liste, 'completed', true);
  }
}
