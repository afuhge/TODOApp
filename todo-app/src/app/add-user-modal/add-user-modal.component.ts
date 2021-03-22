import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InMemoryDataService} from '../in-memory-data-service';
import {User} from '../user';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {
  users: User[] = [];
  hasError = false;
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private inmem: InMemoryDataService) {
  }

  ngOnInit(): void {
    this.form.controls.color.setValue('#FFFFFF');
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

  onSubmit(): void {
    this.hasError = false;
    const newUser = this.newUser();
    console.log('newuser: ', newUser);
    this.userService.addUser(newUser)
      .subscribe((user) => {
        this.activeModal.close(user);
      }, error => this.hasError = true);
  }

  newUser(): User {
    return new User(this.inmem.genUserId(this.users), this.form.controls.firstname.value, this.form.controls.lastname.value, this.form.controls.email.value, '1245', this.form.controls.color.value);
  }


}
