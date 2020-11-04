import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-euro-convert-component',
  templateUrl: './to-euro-convert-component.component.html',
  styleUrls: ['./to-euro-convert-component.component.css']
})
export class ToEuroConvertComponentComponent implements OnInit {
  @Input() valeur;
  @Output() convert = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  ConverteurToEuro(){
    this.convert.emit(this.valeur);

  }


}
