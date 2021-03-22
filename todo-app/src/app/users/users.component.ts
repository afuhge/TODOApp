import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteUserModalComponent} from '../delete-user-modal/delete-user-modal.component';
import {EditUserModalComponent} from '../edit-user-modal/edit-user-modal.component';
import {AddUserModalComponent} from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

  addUser(): void {
    const modalDialog = this.modalService.open(AddUserModalComponent);
    modalDialog.result
      .then((newUser) => {
        console.log('added user', newUser);
        this.users.push(newUser);
      }).catch(() => {});
  }

  editUser(user: User): void {
    const modalDialog = this.modalService.open(EditUserModalComponent);
    modalDialog.componentInstance.user = user;
    modalDialog.result
      .then((newUser) => {
        console.log('editted user');
        const index = this.users.indexOf(user);
        this.users[index] = newUser;
      }).catch(() => {});
  }

  deleteUser(user: User): void {
    const modalDialog = this.modalService.open(DeleteUserModalComponent);
    modalDialog.componentInstance.user = user;
    modalDialog.result
      .then( () => {
          this.users = this.users.filter((e) => e.id !== user.id);
        }
      )
      .catch(() => {})
    ;
  }

}
