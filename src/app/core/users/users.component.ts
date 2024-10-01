import { Component, OnInit } from '@angular/core';
import { IUserView } from '../../models/views/user-view.interface';
import { UserPresenter } from '../../presenters/users.presenter';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    UserComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements IUserView, OnInit {
  public userActive: any = null;
  public users: any[] = [];
  public usersOwner: any[] = [];
  public errorMessage: string = '';
  isLoadingUserList: boolean = false;
  isLoadingUserOwnerList: boolean = false;
  skeletonArray = new Array(5); // Para simular 5 elementos de skeleton
  constructor(private userPresenter: UserPresenter) {}



  ngOnInit() {
    this.userPresenter.setView(this);
    this.userPresenter.loadUsers();
  }

  displayUserActive(user: any): void {
    this.userActive = user;
  }

  showError(error: string): void {
    this.errorMessage = error; // Mostrar el mensaje de error
  }

  displayUsers(users: any[]): void {
    this.users = users;
  }

  displayUsersOwner(users: any[]): void {
    this.usersOwner = users;
  }

  showLoadingState(isLoadingUserList: boolean, isLoadingUserOwnerList: boolean): void {
    this.isLoadingUserList = isLoadingUserList;
    this.isLoadingUserOwnerList = isLoadingUserOwnerList;
    // Actualiza el estado de carga en la UI
  }

  onSelectUser(user: any) {
    this.userPresenter.selectUser(user);
  }

  getStyle(user: any) {
    return {
      'background-color': user.status === 'owner' ? '#378360' : '#007bff',
      'box-shadow': user?.id === this.userActive?.id ? '#000000 4px 4px 12px 1px' : 'none'
    };
  }

}
