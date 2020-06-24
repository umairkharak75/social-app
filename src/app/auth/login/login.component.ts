import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(public authService:AuthService, public router: Router){}
  profileForm = new FormGroup({
    email: new FormControl(''),

    password: new FormControl(''),
  });


  sumbit(){
    const data={
      email:this.profileForm.get('email').value,
      password:this.profileForm.get('password').value 
   }
    this.authService.login(data).subscribe(token=>{
    if(token){   this.router.navigateByUrl('/dashboard');
  }     
      
      
  })
}
goToSignUp(){
  this.router.navigateByUrl('/signup')
}
}
