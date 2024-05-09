import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  addUser:user={
    id:0,
    name:'',
    email:'',
    password:''
  }

  UserData:user={
    id:0,
    name:'',
    email:'',
    password:''
  }

    constructor(private user:UserService, private route:Router){}


  onRegisterClick(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.add('active');
    }
  }
  
  onLoginClick(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.remove('active');
    }
  }

  addNewUser(){
  this.user.addUser(this.addUser).subscribe({
    next:(res)=>{
      //console.log(res)
      alert('Registration done successfully')
    }
  })
}
SignIn(){
  this.user.loginUser(this.UserData).subscribe({
    next:(res)=>{
      this.route.navigate(['home/dashboard']);
      console.log(this.UserData.email)
    },
    error:(res)=>{
      
      alert('Invalid email or password');
    }

  })
}
}
