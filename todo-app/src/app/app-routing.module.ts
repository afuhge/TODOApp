import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TodoAppMainpageComponent} from './todo-app-mainpage/todo-app-mainpage.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TodoListsComponent} from './todo-lists/todo-lists.component';
import {UsersComponent} from './users/users.component';
import {TodayTodosComponent} from './today-todos/today-todos.component';
import {SettingsComponent} from './settings/settings.component';
import {ImprintComponent} from './imprint/imprint.component';
import {PolicyComponent} from './policy/policy.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'app', component: TodoAppMainpageComponent, children: [
      {path: '', redirectTo: '/app/today', pathMatch: 'full'},
      {path: 'today', component: TodayTodosComponent},
      {path: 'todos', component: TodoListsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'imprint', component: ImprintComponent},
      {path: 'policy', component: PolicyComponent},
      {path: '**', redirectTo: '/page-not-found',  pathMatch: 'full'}
    ]},
  {path: 'page-not-found', component: PageNotFoundComponent},
{path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
