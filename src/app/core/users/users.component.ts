import { Component, OnInit } from '@angular/core';
import { IUserView } from '../../models/views/user-view.interface';
import { UserPresenter } from '../../presenters/users.presenter';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements IUserView, OnInit {
  public users: any[] = [];
  public errorMessage: string = '';

  constructor(private userPresenter: UserPresenter) {}

  ngOnInit() {
    this.userPresenter.setView(this);
    this.userPresenter.loadUsers();
  }

  showError(error: string): void {
    this.errorMessage = error; // Mostrar el mensaje de error
  }

  displayUsers(users: any[]): void {
    this.users = users;
  }

}
