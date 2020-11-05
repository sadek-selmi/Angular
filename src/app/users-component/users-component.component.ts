import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from './Utilisateur';
import {CalculServiceService} from '../Service/calcul-service.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {
  @Input() val;
  listUsers: Utilisateur[];
  constructor(private calcule: CalculServiceService) { }
  NumBtodo: number = 0;
  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:
          "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email:
          "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:
          "Nathan@yesenia.net"}
    ];
  }
  getNumberd(val) {
    this.NumBtodo = this.calcule.getNumberOf(this.listUsers, 'username', val);
  }
}
