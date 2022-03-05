import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

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

  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDropdownPosition();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  private setDropdownPosition() {
    const { top, left, width } =
      this.wrapper.nativeElement.getBoundingClientRect();
    this.dropdown.nativeElement.style.top = `${top + 30}px`;
    this.dropdown.nativeElement.style.left = `${left + width / 2 - 40}px`;
  }

  private login(username: string, password: string) {
    if (this.loginservice.login(username, password)) {
      this.dropdownOpen = false;
    }
  }
}
