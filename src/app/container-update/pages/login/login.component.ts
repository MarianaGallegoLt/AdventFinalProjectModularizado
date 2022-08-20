import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    })
  }

  loginIn(){
    console.log(this.formLogin);
    
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    if(email != '' && password != ''){
      this.fakeLoading()
    }else{
      console.log('User does not exists');
    }
  }

  fakeLoading(){
    setTimeout(() => {
      this.router.navigate(['container-list'])
    }, 250);
  }

}
