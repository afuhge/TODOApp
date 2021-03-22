import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})

export class EditUserModalComponent implements OnInit {
  @Input() user: User;

  hasError = false;
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
  }

  ngOnInit(): void {
    this.form.controls.firstname.setValue(this.user.firstname);
    this.form.controls.lastname.setValue(this.user.lastname);
    this.form.controls.email.setValue(this.user.email);
    this.form.controls.color.setValue(this.user.color);
  }

  onSubmit(): void {
    this.hasError = false;
    const updatedUser = this.updateUser(this.user);
    this.userService.updateUser(updatedUser)
      .subscribe((newUser) => {
        this.activeModal.close(newUser);
      }, error => this.hasError = true);
  }

  updateUser(user: User): User {
    return new User(user.id, this.form.controls.firstname.value, this.form.controls.lastname.value, this.form.controls.email.value, user.password, this.form.controls.color.value);

  }
}
