import { Component, OnInit } from '@angular/core';
import {Article} from '../user-component/Article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  constructor() { }
  Title = 'Les articles du jour ';
  ListeArticles: Article[] = [
    {
      Titre: 'Le championnat du monde',
      Contenu: 'Le champion du monde de cette année est',
      Auteur: 'Med Taher',
      Date: '12/12/2005'
    },
    {
      Titre: 'Les nouveaux parents',
      Contenu: 'Les nouveaux parents',
      Auteur: 'Ahmed Said',
      Date: '11/11/2018'
    },
    {
      Titre: 'Comment écrire votre CV',
      Contenu: 'Pour réussir à décraucher un emploi',
      Auteur: 'Marie Elsa',
      Date: '02/04/2017'
    }
  ];

  ngOnInit(): void {
  }

}
