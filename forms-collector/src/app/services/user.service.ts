import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:7034/api"
  private url="Registration";
  private url2="Login"
  constructor(private http:HttpClient) { }
  
  //add-user service
  addUser(addUserRequest:user):Observable<user>{
    return this.http.post<user>(`${this.apiUrl}/${this.url}`,addUserRequest)
  }

  loginUser(loginUserRequest:user):Observable<user>{
    return this.http.post<user>(`${this.apiUrl}/${this.url2}`,loginUserRequest)
  }

  //emailservice
  async sendEmail(form:string){
    // emailjs.init('csNzkwm4sYQsHAOlu');
    // let response=await emailjs.send("service_zsgx60n","template_oipcwz8",{
    //  from_name: "dedsec",
    //  to_name: "marshal",
    //  from_email:'dedsec929@gmail.com',
    //  message: "Hey, this is a gentle reminder that your deadline is tomorrow for completing the "+form+" form",
    //  });
    }
}
