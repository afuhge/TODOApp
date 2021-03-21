import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css']
})
export class DeleteUserModalComponent implements OnInit {
@Input() user: User;
hasError = false;
  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }


  delete(): void {
    this.hasError = false;
    this.userService.deleteUser(this.user)
      .subscribe(() => { this.activeModal.close('delete button click'); }, error => this.hasError = true );
  }
}
