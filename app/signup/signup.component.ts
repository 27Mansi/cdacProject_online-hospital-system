import { Component, OnInit } from '@angular/core';
import { EmitterserviceService } from '../emitterservice.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { toUnicode } from 'punycode';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // name:'';
  // email:'';
  // password:'';
  // role='';

  constructor(
    private emtService:EmitterserviceService,
    private authService: AuthService,
    private router: Router,
    private dataService:DataService
  ) {
   
   }

   formdata = new FormGroup({
     name: new FormControl(''),
     email: new FormControl(''),
     password: new FormControl(''),
     role: new FormControl('')
   })
  user:any;
  data:any;
  ngOnInit() {
    
  }
/*
  onSignUp(){

    
    if(this.role=='DOCTOR')
    {
      sessionStorage['signup_status'] = '1';
      localStorage.setItem('role',this.role);
      localStorage.setItem('flag','true');
      this.router.navigate(['/aftersignup']);
    }
    else if(this.role=='RECEPTIONIST'){
      sessionStorage['signup_status'] = '1';
      localStorage.setItem('role',this.role);
      localStorage.setItem('flag','true');
      this.router.navigate(['/aftersignup']);
    }
    else if(this.role=='PATIENT'){
      sessionStorage['signup_status'] = '1';
      localStorage.setItem('role',this.role);
      localStorage.setItem('flag','true');
      this.router.navigate(['/aftersignup']);
    }
    else{
      alert("enter role in capitals:DOCTOR/RECEPTIONIST/PATIENT");
      this.router.navigate(['']);
    }
  }*/

  Register()
  {
    console.log("in register ....")
    //this.user=registerfrom.form.value;
   
    console.log(this.formdata.value);
    let obsreg=this.dataService.register(this.formdata.value);
    obsreg.subscribe((res)=>{
      this.data=res;
      if(this.data.role=="PATIENT")
      {
        console.log("inside iffffffff")
        alert("Registered Successfully");

        this.router.navigate(['/signin']);
      }
      else  if(this.data.role=="DOCTOR")
      {
        console.log("inside iffffffff")
        alert("Registered Successfully");

        this.router.navigate(['/signin']);
      }
      
      console.log("data registered")
  //this.router.navigate(['login'])
    }) 
  }


}
