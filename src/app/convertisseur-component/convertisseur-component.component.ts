import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-convertisseur-component',
  templateUrl: './convertisseur-component.component.html',
  styleUrls: ['./convertisseur-component.component.css']
})
export class ConvertisseurComponentComponent implements OnInit {
  @Input() val;
  tab = [];
  value : number;

  constructor() { }

  ngOnInit(): void {
  }

  StockValues(val){
    this.value = val;
    this.tab.push(this.value);
    console.log(this.tab);




  }
}
