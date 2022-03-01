import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username:string=''
  usernameSubject:BehaviorSubject<string> = new BehaviorSubject(this.username)
  constructor(private httpClient:HttpClient) { }

  authenticateUser(user:User){
    return this.httpClient.post("http://localhost:1892/user",user);
  }
  setBearToken(token:any){
    localStorage.setItem('token',token['token'])
  }
  getBearToken(){
    return localStorage.getItem('token')
  }
  getUsername(){
    return this.usernameSubject
  }


}
