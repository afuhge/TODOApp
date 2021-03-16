import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoAppMainpageComponent } from './todo-app-mainpage/todo-app-mainpage.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { UsersComponent } from './users/users.component';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FaConfig, FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {faCoffee, faCog, faSignOutAlt, faUsers, faList, faCopyright, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodayTodosComponent } from './today-todos/today-todos.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoAppMainpageComponent,
    TodoListsComponent,
    UsersComponent,
    SettingsComponent,
    PageNotFoundComponent,
    TodayTodosComponent,
    ImprintComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(fa: FaIconLibrary) {
    fa.addIcons(faCoffee, faCog, faSignOutAlt, faUsers, faList, faCopyright, faUndoAlt);
  }


}
