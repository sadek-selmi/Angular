import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() information ;
  @Output() inf = new EventEmitter() ;
  @Input() color;
  @Output() color1 = new EventEmitter<any>();

  constructor() { }
  name = 'red';
  step= 'step1';
  ngOnInit(): void {
    console.log(this.information);
  }
   SendData(){

    this.inf.emit('4twin5 ');
}
  change(){
    this.color1.emit(this.color);
  }

}
