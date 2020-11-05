import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SallesListComponentComponent } from './salles-list-component/salles-list-component.component';
import {RouterModule} from '@angular/router';
import { SalleComponentComponent } from './salle-component/salle-component.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ArticlesComponentComponent,
    FilmsComponentComponent,
    ParentComponent,
    ChildComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    UserFormComponentComponent,
    TemplateDrivenFormComponentComponent,
    HomeComponentComponent,
    SallesListComponentComponent,
    SalleComponentComponent,
    TodoListComponentComponent,
    UsersComponentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
