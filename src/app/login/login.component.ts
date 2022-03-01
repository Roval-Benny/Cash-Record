import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('',[Validators.email,Validators.required])
  password = new FormControl('',Validators.required)
  warning = ''
  constructor(private auth:AuthenticationService,private router:Router,private ds:DataService) { }

  ngOnInit(): void {

  }
  
  onSignIn(){
    if(this.username.valid && this.password.valid){
      this.warning = ''
      let user:User = new User(this.username.value,this.password.value);
      this.auth.authenticateUser(user).subscribe(
        (data)=>{
          this.auth.setBearToken(data)
          console.log("Halo")
              console.log(data)
              localStorage.setItem('username',this.username.value)
              console.log(localStorage.getItem('token'))
              console.log("Hello")
        },
        (err)=>{
          this.warning = "Invalid Password or Username"
        },
        (()=>{
          this.router.navigate([''])
        }))
    }else{
      this.warning = 'Enter the fields'
    }
  }

}
