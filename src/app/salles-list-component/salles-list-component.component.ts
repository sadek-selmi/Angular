import { Component, OnInit } from '@angular/core';
import {Salle} from './salle';

@Component({
  selector: 'app-salles-list-component',
  templateUrl: './salles-list-component.component.html',
  styleUrls: ['./salles-list-component.component.css']
})
export class SallesListComponentComponent implements OnInit {
  liste: Salle [] = [
    {id: 1, nom: 'éléctro mecanique', capacite: 30},
    {id: 2, nom: 'Genie civile', capacite: 50},
    {id: 3, nom: 'IOT', capacite: 100},
    {id: 4, nom: 'Informatique mecanique', capacite: 10},
    {id: 5, nom: 'BI', capacite: 50},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
