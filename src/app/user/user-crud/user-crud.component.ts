import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UserModule} from "../user.module";
import {AhsanType} from "../ahsan.enum";
@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  job:any[]=[];
  name: string = "";
  email: string = "";
  password: string = "";
  user_id: string = "";
  ahsan:string="";
  user_data: any[] = [];
  sergio(val:any){
    alert(val);
  }
  constructor(private http: HttpClient) {
    // console.log(this.UserModule);
    this.get_all_users();
    [1,2,3,4,5,6].forEach((i)=>{
      this.job.push(i);
    })
    console.log(this.job);
  }
  ngOnInit(): void {
    alert("good job");
    setTimeout(() => {
      alert(AhsanType.CHECKER);
    }, 1000);
  }
  get_all_users() {
    this.http.get('http://localhost:4000/api/v1/users').subscribe((users: any) => {
      this.user_data = users.all_users;
      console.log(this.user_data);
    })
  }
  register_users() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.http.post('http://localhost:4000/api/v1/register', data).subscribe((reg: any) => {
      this.get_all_users();
      console.log(reg);
      // this.name = "";
      this.email = "";
      this.password = "";

    })
  }
  set_user(user: any) {
    this.name= user?.name;
    this.email = user?.email;
    this.password = user?.password;
    this.user_id = user?._id;
  }
  edit_user() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    }
    this.http.put(`http://localhost:4000/api/v1/user/${this.user_id}`, data).subscribe((update_data: any) => {
      this.get_all_users();
      this.name = "";
      this.email = "";
      this.password = "";
      this.user_id = "";
    })
  }
  save() {
    if (this.user_id) {
      this.edit_user();
    }
    else {
      this.register_users();
    }
  }
  delete_user(user: any) {
    this.http.delete(`http://localhost:4000/api/v1/user/${user?._id}`).subscribe((user: any) => {
      console.log(user);
      this.get_all_users();
    },
    (response)=>{
      console.log(response.error.error);
    }
    )
  }
}
