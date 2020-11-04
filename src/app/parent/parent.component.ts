import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
test = '4twin5';
@Input() nom;

  constructor() { }

  ngOnInit(): void {
  }
  process(message){
    console.log(message);
  }
  Change(color){
    console.log(color);
    this.nom="green";




  }
}
