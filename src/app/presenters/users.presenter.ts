import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUserView } from '../models/views/user-view.interface';
// import { UserService } from './user.service';
// import { UserView } from './user-view';

@Injectable({
  providedIn: 'root'
})
export class UserPresenter {
  private view!: IUserView;

  constructor(private userService: UsersService) {}

  setView(view: IUserView) {
    this.view = view;
  }

  loadUsers() {
    this.userService.getUsers()
    .subscribe(
      users => this.view.displayUsers(users),
      error => this.view.showError('Error al cargar usuarios')
    );
  }
}
