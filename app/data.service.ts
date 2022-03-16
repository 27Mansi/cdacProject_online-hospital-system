import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url="http://localhost:6060/online_clinic_3.1/"
  constructor(private http:HttpClient) {
    console.log("in data service")
   }
   register(user)
   {
     return this.http.post("http://localhost:6060/online_clinic_3.1/user/",user);
   }
getAllDoctors()
{
  console.log("all doctor details");
  return this.http.get("http://localhost:6060/online_clinic_3.1/admin/list");
}
selectForLogin(logincredential)
{
  console.log(logincredential);
  return this.http.post("http://localhost:6060/online_clinic_3.1/user/login/",logincredential);
  console.log("record returned");
}
deleteDocById(No)
{
  return this.http.delete("http://localhost:6060/online_clinic_3.1/admin/"+No)
}

addDocDetails(doc)
{
  return this.http.post("http://localhost:6060/online_clinic_3.1/doctor",doc);
}

addPatDetails(pat)
{
  return this.http.post("http://localhost:6060/online_clinic_3.1/patient",pat);
}
UpdatePass(user)
{
  return this.http.put(this.url+"/user/changepass/"+user.userId,user);

}
addAppDetails(appt)
{
  return this.http.post("http://localhost:6060/online_clinic_3.1/patient/appointment",appt);
}
getAppByDocId(doc)
{
  return this.http.get("http://localhost:6060/online_clinic_3.1/doctor/"+doc);
}
getAppByPatId(pat)
{
  return this.http.get("http://localhost:6060/online_clinic_3.1/patient/"+pat);
}
getAllApp()
{
  console.log("all appointment details");
  return this.http.get("http://localhost:6060/online_clinic_3.1/doctor/applist");
}
}
