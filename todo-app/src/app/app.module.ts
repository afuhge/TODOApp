import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoAppMainpageComponent } from './todo-app-mainpage/todo-app-mainpage.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { UsersComponent } from './users/users.component';
import {NgbDropdownModule, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {faCoffee, faCog, faSignOutAlt, faUsers, faList, faCopyright, faUndoAlt, faSignInAlt, faEdit, faTrashAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';

import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodayTodosComponent } from './today-todos/today-todos.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicyComponent } from './policy/policy.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data-service';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';

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
    PolicyComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    DeleteUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModalModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(fa: FaIconLibrary) {
    fa.addIcons(faCoffee, faCog, faSignOutAlt, faUsers, faList, faCopyright, faUndoAlt, faSignInAlt, faTrashAlt, faEdit, faUserPlus);
  }


}
