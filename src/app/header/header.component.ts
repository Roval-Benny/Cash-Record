import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string=''
  login:boolean = false
  constructor(private router:Router) { 
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username') as string
    if(this.username !=null && this.username.length>1){
      this.login=true
    }else{
      this.login = false
    }
  }

  onLogin(){
    this.router.navigate(['login'])
  }

  onLogout(){
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    this.router.navigate(['login'])
    this.username =''
    this.login = false
  }

}
