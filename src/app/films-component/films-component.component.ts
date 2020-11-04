import { Component, OnInit } from '@angular/core';
import {Filmm} from '../films-component/listFilms';

@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css']
})
export class FilmsComponentComponent implements OnInit {
  filmss: Filmm[];


  constructor() { }
s:number;
color = 'blue';
  size= '11';
  public somme : number = 0;
  public long : number = 0;
  public k : number = 0;

  ngOnInit() {
    this.filmss  = [
      {nom:'MANDY', duree:2 ,categorie:'action'},
      {nom:'LOVE-AFTER-LOVE',duree:3,categorie:'drama'},
      {nom:'YOU-WERE-NEVER-REALLY-HERE',duree:5,categorie:'drama'},
      {nom:'THE-RIDER',duree:3,categorie:'drama'},
      {nom:'FIRST-REFORMED',duree:6,categorie:'action'}
    ];
    this.s= this.filmss.length;
    console.log(this.filmss.length);
  }

  public buttonClicked: boolean = false;

  public text: string = 'AfficherHobbies';

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
   if(this.k == 0){
    if(this.text !== 'AfficherHobbies') {
      this.text = 'Masquerhobbies'
    } else {
      this.text = 'AfficherHobbies';
      for (var i = 0; i < this.filmss.length; i++) {
        if (this.filmss[i].categorie=='action')
        {
          this.somme++;
          this.long=this.filmss.length;
        }
        this.k++;
      }


    }}
  }









}
