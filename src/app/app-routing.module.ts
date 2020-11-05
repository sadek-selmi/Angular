import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {SallesListComponentComponent} from './salles-list-component/salles-list-component.component';
import {SalleComponentComponent} from './salle-component/salle-component.component';
import {TodoListComponentComponent} from './todo-list-component/todo-list-component.component';
import {UsersComponentComponent} from './users-component/users-component.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'salles', component: SallesListComponentComponent},
  {path: 'salle/:id', component: SalleComponentComponent},
  {path: 'todo', component: TodoListComponentComponent},
  {path: 'user', component: UsersComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
