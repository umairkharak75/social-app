import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  disabled:boolean
  constructor(public authService:AuthService, public router: Router){}
  profileForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });


  sumbit(){
     

    const data={
      email:this.profileForm.get('email').value,
      name:this.profileForm.get('name').value,
      password:this.profileForm.get('password').value 
  
  }
  console.log(data)
    this.authService.createUser(data).subscribe(token=>{
    if(token){   this.router.navigateByUrl('/dashboard');

  }     
      
      
  })
}
}