import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loginaccount',
  templateUrl: './loginaccount.component.html',
  styleUrls: ['./loginaccount.component.css']
})
export class LoginaccountComponent {

  email:string="";
  password:string="";
  message:string="";

  constructor(private router:Router){}

  giris(){
    const mail="admin";
    const password:string="admin";

    if(this.email==mail && this.password==password)
    {
      this.router.navigateByUrl('/shop');
    }
    else
    {
      this.message="Email veya password hatali";
    }
  }
}
