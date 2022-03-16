import { Injectable } from '@angular/core';
import { Router,RouterStateSnapshot,ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
 message:"aaaa";
 user:any;
  constructor(
    private router: Router,
    private http: HttpClient,private service:DataService) {
      console.log("aaaaaaaaaaaa")
      //this.flag=true;
     }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if(this.Isloggedin())
    {
      console.log("user has logged in");
      return true;
    }
    else
    {
      console.log("user has not logged in");
      this.router.navigate(['/signin']);
      return false;
    }
    
    
  }

  Isloggedin()
{
   
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="1")
{
// some logic to check if person has logged in
return true;
}
else if(window.sessionStorage.getItem("isActive")!=null 
&& 
window.sessionStorage.getItem("isActive")=="2")
{
// some logic to check if person has logged in
return true;
}
else if(window.sessionStorage.getItem("isActive")!=null 
&& 
window.sessionStorage.getItem("isActive")=="3")
{
// some logic to check if person has logged in
return true;
}
else if(window.sessionStorage.getItem("isActive")!=null 
&& 
window.sessionStorage.getItem("isActive")=="4")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}
}
isadmin()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="1")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}
}

isdoctor()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="3")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}
}

ispatient()
{
  if(window.sessionStorage.getItem("isActive")!=null 
  && 
 window.sessionStorage.getItem("isActive")=="4")
{
// some logic to check if person has logged in
return true;
}
else{
return false;
}
}

function ($scope)
    {
    $scope.id=[1];
    }
LogIn(logincredentials):boolean {
  console.log("in auth");
  let observable =this.service.selectForLogin(logincredentials)
   observable.subscribe((result)=>{
    console.log("hello");
    this.user=result;
    console.log(this.user);
    console.log(this.user.role);
    window.sessionStorage.setItem('user1',this.user.email)

    if(this.user.role=="ADMIN")
  {
    console.log("equal");
    window.sessionStorage.setItem("isActive","1");
    this.router.navigate(["/afterlogin"]);
  }
  else if(this.user.role=="RECEPTIONIST")
  {
    window.sessionStorage.setItem("isActive","2");
    this.router.navigate(["/afterlogin"]);

  }
  else if(this.user.role=="DOCTOR"){

    window.sessionStorage.setItem("isActive","3");
    this.router.navigate(["/afterlogin"]);

  }
  else if(this.user.role=="PATIENT"){

    window.sessionStorage.setItem("isActive","4");
    this.router.navigate(["/afterlogin"]);

  }
  else
  {
    return false;

  }
  
 
  });
  
  return true;

}


getMessage()
{
  console.log(this.message);

  return this.message;
}






Logout()
{
  window.sessionStorage.setItem("isActive","0");
  this.router.navigate(['/signin']);
}


}
