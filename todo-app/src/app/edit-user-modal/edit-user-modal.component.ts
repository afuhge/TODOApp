import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {
hasError = false;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }

  edit(): void {

  }
}
