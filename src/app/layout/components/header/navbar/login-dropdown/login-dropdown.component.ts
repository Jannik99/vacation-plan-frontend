import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.scss'],
})
export class LoginDropdownComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdown') dropdown: any;
  @ViewChild('wrapper') wrapper: any;
  dropdownOpen = false;

  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  private login(username: string, password: string) {
    // if (this.loginservice.login(username, password)) {
    //   this.dropdownOpen = false;
    // }
  }
}
