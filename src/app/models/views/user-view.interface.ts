export interface IUserView {
  displayUsers(users: any[]): void;
  displayUsersOwner(users: any[]): void;
  displayUserActive(user: any): void;
  showLoadingState(isLoadingUserList: boolean, isLoadingUserOwnerList: boolean): void
  showError(error: string): void;
}
