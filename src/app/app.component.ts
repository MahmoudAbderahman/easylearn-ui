/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/tokenStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Easy Learn';
  isLoggedIn = false;
  username: string;
  UserType: string;
  isStudent: boolean;
  isTeacher: boolean;
  isParent: boolean;
  isAdmin: boolean;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.UserType = user.UserType;

      this.isParent = this.UserType.includes('PARENT');
      this.isStudent = this.UserType.includes('STUDENT');
      this.isTeacher = this.UserType.includes('TEACHER');
      this.isAdmin = this.UserType.includes('ADMIN')
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

