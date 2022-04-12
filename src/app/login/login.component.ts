import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from './../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.usersService.authenticateUser(form.value.email, form.value.password)
      ? this.router.navigate(['movies'])
      : alert("Incorrect email or password!");
  }
}
