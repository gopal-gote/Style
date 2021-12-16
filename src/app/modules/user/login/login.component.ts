import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import {UserService} from "src/app/core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;
 show = 'hide';
 hide = true;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private spinner: NgxSpinnerService,
    private userService:UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: [
          '',
          [
              Validators.required,
              Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
          ]
      ]
  });
   }

  ngOnInit(): void {
   
  }
  login(){
    // const payload={
    //   username:''
    // }
    // this.userService.login(payload).subscribe(result=>{});
    this.route.navigate(["/dashboard"]);
  }
  social() {}
}
