import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUserView } from '../models/views/user-view.interface';
import { finalize, merge, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPresenter {
  private view!: IUserView;

  private _users:any[] = [];
  private _usersOwner:any[] = [];

  private isLoadingUserList: boolean = false;
  private isLoadingUserOwnerList: boolean = false;

  constructor(private userService: UsersService) {}

  setView(view: IUserView) {
    this.view = view;
  }

  loadUsers() {
    const { getUsersList$, getUsersOwnerList$ } = this.userService;
    // Establecer el estado de carga para ambos
    this.isLoadingUserList = true;
    this.isLoadingUserOwnerList = true;
    this.view.showLoadingState(true, true); // Mostrar el estado de carga en la vista

    merge(getUsersList$(), getUsersOwnerList$())
    .subscribe(
      ({type, value}) => {
        let activeUser = null;

        this._users = type === 'plate' ? [...value] : [...this._users];
        this._usersOwner = type === 'gold' ? [...value] : [...this._usersOwner];

        this.view.displayUsers(this._users);
        this.view.displayUsersOwner(this._usersOwner);
        if (this._usersOwner.length > 0) {
          activeUser = this._usersOwner[0];
        } else if (this._users.length > 0) {
          activeUser = this._users[0];
        }

        this.setLoadingUsers((this._users.length === 0), this._usersOwner.length === 0);
        this.view.displayUserActive(activeUser);

      },
      error => this.view.showError('Error al cargar usuarios')
    );
  }

  setLoadingUsers(isLoadingUser: boolean, isLoadingOwner: boolean) {
    this.isLoadingUserList = isLoadingUser;
    this.isLoadingUserOwnerList = isLoadingOwner;
    this.view.showLoadingState(isLoadingUser, isLoadingOwner);
  }

  selectUser(user: any) {
    this.view.displayUserActive(user);
  }
}
