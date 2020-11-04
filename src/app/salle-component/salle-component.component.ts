import {Component, Input, OnInit} from '@angular/core';
import {Salle} from '../salles-list-component/salle';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-salle-component',
  templateUrl: './salle-component.component.html',
  styleUrls: ['./salle-component.component.css']
})
export class SalleComponentComponent implements OnInit {
  idS;
  @Input() me: Salle [] = [
    {id: 1, nom: 'éléctro mecanique', capacite: 30},
    {id: 2, nom: 'Genie civile', capacite: 50},
    {id: 3, nom: 'IOT', capacite: 100},
    {id: 4, nom: 'Informatique mecanique', capacite: 10},
    {id: 5, nom: 'BI', capacite: 50},
  ];


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.idS = this.route.snapshot.params.id;
  }
}
