import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  nam: string = '';
 public name: String = 'Sadek';
  public email: String = 'Sadek.selmi@esprit.tn';
  public address: String = 'ariana soghra';
  public hobbies: String[] = ['Music', 'Movies', 'Sports'];
  removeItem(index,value){
    this.hobbies.splice(index, 1);
    console.log(value);
  }
  public buttonClicked: boolean = false;
  public text: string = 'AfficherHobbies';

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
    if(this.text === 'AfficherHobbies') {
      this.text = 'Masquerhobbies'
    } else {
      this.text = 'AfficherHobbies'
    }
  }
  constructor() {


  }



  ngOnInit(): void {
  }

}
