(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Help</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul>\n</nav>\n\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n\n<p>Hospital management system is online patient management and Appointment,\nScheduler application software for getting an appointment very easily over the internet.\n This Hospital management system application software is built upon Angular  Hospital \n can take the online patient appointment and patient can take doctor schedule from anywhere\n  in India!!!!\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>admin works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/afterlogin/afterlogin.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/afterlogin/afterlogin.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>afterlogin works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <h3 style=\"text-align: center; color: blue;font-size: 30px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Register</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul>\n</nav> -->\n<div class=\"row\" >\n    <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n            <ul class=\"nav navbar-nav\" *ngIf=\"service.isadmin()\">\n                    <!-- //when anyone hit Home we want to go /home .To convey what /home is go in app.module.ts and define import Router\n                    Module and in imports write routes by RouterModule.ForRoot[]-->\n                    \n                    <li>\n                        <a  routerLink=\"/editprofile\">Edit Profile</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/changepassword\">CHANGE PASSWORD</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/listofdoctors\">DOCTOR'S LIST</a>\n                    </li>\n                   \n                    \n                    <li *ngIf=\"service.Isloggedin()\" >\n                            \n                            <a  (click)=\"Logout()\">Logout</a>\n                        </li>\n                    \n                    <li *ngIf=\"!service.Isloggedin()\">\n                            <a routerLink=\"/login\">login</a>\n                    </li>\n            \n                    \n                </ul>\n\n                <ul class=\"nav navbar-nav\" *ngIf=\"service.isdoctor()\">\n                    <!-- //when anyone hit Home we want to go /home .To convey what /home is go in app.module.ts and define import Router\n                    Module and in imports write routes by RouterModule.ForRoot[]-->\n                    \n                    <li>\n                        <a  routerLink=\"/editprofile\">Edit Profile</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/changepassword\">CHANGE PASSWORD</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/doctor\">Add your details</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/listofappointments\">Appointment list</a>\n                    </li>\n                   \n                    \n                    <li *ngIf=\"service.Isloggedin()\" >\n                            \n                            <a  (click)=\"Logout()\">Logout</a>\n                        </li>\n                    \n                    <li *ngIf=\"!service.Isloggedin()\">\n                            <a routerLink=\"/login\">login</a>\n                    </li>\n            \n                    \n                </ul>\n                <ul class=\"nav navbar-nav\" *ngIf=\"service.ispatient()\">\n                    <!-- //when anyone hit Home we want to go /home .To convey what /home is go in app.module.ts and define import Router\n                    Module and in imports write routes by RouterModule.ForRoot[]-->\n                    \n                    \n                    <li >\n                        <a  routerLink=\"/changepassword\">CHANGE PASSWORD</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/patient\">Add your details</a>\n                    </li>\n                    <li >\n                        <a  routerLink=\"/appointment\">Request Appointment</a>\n                    </li> \n                    <li >\n                        <a  routerLink=\"/listofappointments\">Appointment Schedule</a>\n                    </li> \n                   \n                    \n                    <li *ngIf=\"service.Isloggedin()\" >\n                            \n                            <a  (click)=\"Logout()\">Logout</a>\n                        </li>\n                    \n                    <li *ngIf=\"!service.Isloggedin()\">\n                            <a routerLink=\"/login\">login</a>\n                    </li>\n            \n                    \n                </ul>\n                </nav>\n                </div>\n\n<router-outlet>\n\n</router-outlet>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"text-center\">\n            <h1>Insert Details</h1>\n            <hr>\n        </div>\n        <form [formGroup]=\"formdata\" (ngSubmit)=\"addAppointment()\" role=\"form\">\n           \n\n            <div class=\"col-md-6\">\n\n\n            \n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Date of Birth</label>\n                    <input ngModel type=\"date\" class=\"form-control\" id=\"appDate\" name=\"appDate\" formControlName=\"appDate\"/>\n                </div> \n               \n                                \n\n                 \n             \n\n            </div>\n            <br>\n            <div class=\"text-center\">\n                <span class=\"label \">{{message}}</span>\n                <br>\n                <hr style=\"background-color: black\"> \n                <button  type=\"submit\" class=\"btn btn-success\">Request</button> &nbsp; &nbsp;\n                <button   type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n            </div>\n\n        </form>\n\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<form   #mypassform=\"ngForm\" (ngSubmit)=\"updatepass(mypassform)\">\n  <div style=\"text-align: center\">\n    <legend>Change Password</legend>\n</div>\n\n\n\n\n<div class=\"form-group\">\n    <label for=\"password\">New Password</label>\n    <input  type=\"password\" class=\"form-control\" id=\"password\"  name=\"password\" placeholder=\"Enter Password Here\" [(ngModel)]=\"user.password\">\n</div>\n      \n\n        <span class=\"label \">{{message}}</span>\n<br>\n     <button type=\"submit\"  class=\"btn btn-success\">Update</button>  &nbsp; &nbsp;\n     <button  type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Help</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul>\n</nav>\n<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Style inputs */\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Style the container/contact section */\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 10px;\n}\n\n/* Create two columns that float next to eachother */\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 6px;\n  padding: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n</style>\n</head>\n<body>\n\n\n\n<div class=\"container\">\n  <div style=\"text-align:center\">\n    <h2>Contact Us</h2>\n    <p>Swing by for a cup of coffee, or leave us a message:</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n      <img src=\"https://www.animatedvideo.com/blog/wp-content/uploads/2017/04/Main-Header-How-to-do-SEO-for-your-Contact-US-page.jpg\" style=\"width:100% ;height:500px\">\n    </div>\n    <div class=\"column\">\n      <form action=\"/action_page.php\">\n        <label for=\"fname\">First Name</label>\n        <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n        <label for=\"lname\">Last Name</label>\n        <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n        <label for=\"country\">Country</label>\n        <select id=\"country\" name=\"country\">\n          <option value=\"india\">India</option>\n          <option value=\"canada\">Canada</option>\n          <option value=\"usa\">USA</option>\n        </select>\n        <label for=\"subject\">Subject</label>\n        <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n        <input type=\"submit\" value=\"Submit\">\n      </form>\n    </div>\n  </div>\n</div>\n\n</body>\n</html>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>delete works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>doctor works!</p>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"text-center\">\n            <h1>Insert Details</h1>\n            <hr>\n        </div>\n        <form [formGroup]=\"formdata\" (ngSubmit)=\"addDoctor()\" role=\"form\">\n           \n\n            <div class=\"col-md-6\">\n\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Name</label>\n                    <input  type=\"text\" class=\"form-control\" id=\"dName\" name=\"dName\" formControlName=\"dName\"\n                        placeholder=\"Enter name\"/>\n                </div>\n\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Contact</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"contact\" name=\"contact\" formControlName=\"contact\"\n                        placeholder=\"Eg:1234\"/>\n                </div>\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">number of days available in a week</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"daysInWeek\" name=\"daysInWeek\" formControlName=\"daysInWeek\"/>\n                </div> \n                <div class=\"form-group\">\n                    <label style=\"color: black\">Experience</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"experience\" name=\"experience\" formControlName=\"experience\"/>\n                </div> \n                <div class=\"form-group\">\n                    <label style=\"color: black\">Fees</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"fees\" name=\"fees\" formControlName=\"fees\"/>\n                </div> \n                <div class=\"form-group\">\n                    <label style=\"color: black\">Speciality</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"speciality\" name=\"speciality\" formControlName=\"speciality\"/>\n                </div>                  \n\n                 \n             \n\n            </div>\n            <br>\n            <div class=\"text-center\">\n                <span class=\"label \">{{message}}</span>\n                <br>\n                <hr style=\"background-color: black\"> \n                <button  type=\"submit\" class=\"btn btn-success\">Save</button> &nbsp; &nbsp;\n                <button   type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n            </div>\n\n        </form>\n\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>editprofile works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Help</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul>\n</nav>\n\n<p>help works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Register</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul>\n</nav>\n\n<div class=\"container\" style=\"width: 100%\">\n    <img src=\"https://ors.gov.in/images/slides/1.jpg\" alt=\"image\" style=\"height: 700px;width: 100%\">\n</div>\n\n\n<button [routerLink]=\"['/signin']\" routerLinkActive=\"router-link-active\"  type=\"submit\" class=\"btn btn-warning pull-center\" style=\"margin-left:auto;margin-right:auto;display:block\">Request An Appointment</button>\n\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofappointments/listofappointments.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listofappointments/listofappointments.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container\">\n\n    <div class=\"table-fixed\" style=\"width: 100%\" > \n      <table class=\"table table-hover\">\n          <caption style=\"text-align: center;\">Appointment INFORMATION</caption>\n        <thead>\n          <tr>\n            <th>No</th>\n            <th>Appointment date</th>\n            <th>Doctor</th>\n            <th>Patient</th>\n\n            \n            \n       \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let app of appointments\">\n            <td>{{app.appId}}</td>\n            <td>{{app.appDate}}</td>\n            <td>{{app.doc_id}}</td>\n            <td>{{app.pat_id}}</td>\n           \n          </tr>\n          <br>\n          \n        </tbody>\n      </table>\n      \n      \n  \n    </div>\n   \n    </div>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofdoctors/listofdoctors.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listofdoctors/listofdoctors.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container\">\n\n        <div class=\"table-fixed\" style=\"width: 100%\"> \n          <table class=\"table table-hover\">\n              <caption style=\"text-align: center;\">DOCTOR INFORMATION</caption>\n            <thead>\n              <tr>\n                <th>No</th>\n                <th>Name</th>\n                <th>Speciality</th>\n               <th>Availability of days in week</th>\n                <th>Contact</th>\n                <th>Experience</th>\n                <th>Fees</th>\n           \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let doctor of doctors\">\n                <td>{{doctor.drId}}</td>\n                <td>{{doctor.dName}}</td>\n                <td>{{doctor.speciality}}</td>\n                <td>{{doctor.daysInWeek}}</td>\n                <td>{{doctor.contact}}</td>\n                <td>{{doctor.experience}}</td>\n                <td>{{doctor.fees}}</td> \n                <td><a routerLink=\"/delete/{{doctor.drId}}\">Delete</a> </td>\n              </tr>\n              <br>\n              \n            </tbody>\n          </table>\n          \n          \n      \n        </div>\n        </div>\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofpatients/listofpatients.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listofpatients/listofpatients.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>listofpatients works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"text-center\">\n            <h1>Insert Details</h1>\n            <hr>\n        </div>\n        <form [formGroup]=\"formdata\" (ngSubmit)=\"addPatient()\" role=\"form\">\n           \n\n            <div class=\"col-md-6\">\n\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Name</label>\n                    <input  type=\"text\" class=\"form-control\" id=\"pName\" name=\"pName\" formControlName=\"pName\"\n                        placeholder=\"Enter name\"/>\n                </div>\n\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Contact</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"contact\" name=\"contact\" formControlName=\"contact\"\n                        placeholder=\"Eg:1234\"/>\n                </div>\n\n                <div class=\"form-group\">\n                    <label style=\"color: black\">Date of Birth</label>\n                    <input ngModel type=\"date\" class=\"form-control\" id=\"dob\" name=\"dob\" formControlName=\"dob\"/>\n                </div> \n                <div class=\"form-group\">\n                    <label style=\"color: black\">Gender</label>\n                    <input ngModel type=\"text\" class=\"form-control\" id=\"gender\" name=\"gender\" formControlName=\"gender\"/>\n                </div> \n                                \n\n                 \n             \n\n            </div>\n            <br>\n            <div class=\"text-center\">\n                <span class=\"label \">{{message}}</span>\n                <br>\n                <hr style=\"background-color: black\"> \n                <button  type=\"submit\" class=\"btn btn-success\">Save</button> &nbsp; &nbsp;\n                <button   type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n            </div>\n\n        </form>\n\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receptionist/receptionist.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receptionist/receptionist.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>receptionist works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n\n\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Help</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul> \n\n</nav>\n<div>\n    <h1>Login</h1>\n    <form #myloginform=\"ngForm\" style=\"margin-left: 40%\"  (ngSubmit)=\"SignIn(myloginform)\">\n\n    <div class=\"row\">\n      <!-- <div class=\"col-md-3\">\n        <img src=\"https://hmsdesk.com/admin/assets/pressrealese/122/5c9cf2e66f832.jpg\" style=\"width:100% ;height:100%\">\n\n      </div> -->\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"\">Email</label>\n          <input ngModel type=\"email\" class=\"form-control\" name=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Password</label>\n          <input ngModel type=\"password\" class=\"form-control\" name=\"password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Role</label>\n            <input ngModel type=\"text\" class=\"form-control\" name=\"role\">\n \n         </div>\n        <div class=\"form-group\">\n            <button  type=\"submit\" class=\"btn btn-success\">Login</button>\n            <button type=\"reset\" (click)=\"onCancel()\" class=\"btn btn-danger\" style=\"margin-left: 10px;\">Cancel</button>\n            <button (click)=\"onSignup()\"  class=\"btn btn-warning pull-right\">Signup</button>\n           \n        </div>\n      </div>\n    </div>\n    </form>\n    </div>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center; color: blue;font-size: 50px;font-family: cursive\" ><b>Online Hospital Management System</b></h3>\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\n    <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n            <a routerLink=\"/home\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/about\">About</a>\n        </li>\n        <li>\n                <a routerLink=\"/contact\">Contact</a>\n        </li>\n        <li>\n                <a routerLink=\"/help\">Help</a>\n        </li>\n        <li>\n            <a routerLink=\"/signin\">Signin</a>\n         </li>\n         <li>\n          <a routerLink=\"/signup\">Signup</a>\n       </li>\n       \n     </ul> \n\n</nav>\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"text-center\">\n                <h1>Register Here</h1>\n                <hr>\n            </div>\n            <form [formGroup]=\"formdata\" (ngSubmit)=\"Register()\" role=\"form\">\n               <!-- !registerform=\"ngForm\"-->\n    \n                <div class=\"col-md-6\">\n    \n    \n                    <div class=\"form-group\">\n                        <label style=\"color: black\">Name</label>\n                        <input  type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\"\n                            placeholder=\"Enter name\"/>\n                    </div>\n    \n    \n                    <div class=\"form-group\">\n                        <label style=\"color: black\">Email</label>\n                        <input ngModel type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\"\n                            placeholder=\"Eg:abc@hms.com\"/>\n                    </div>\n    \n                    <div class=\"form-group\">\n                        <label style=\"color: black\">Password</label>\n                        <input ngModel type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\"/>\n                    </div>                  \n    \n                      <div class=\"form-group\">\n                            <label >Role</label>\n                            &nbsp;\n                           \n                            <input ngModel list=\"Role\" id=\"role\" formControlName=\"role\" >\n                            <datalist id=\"Role\">\n                                <option value=\"DOCTOR\"></option>\n                                <option value=\"RECEPTIONIST\"></option>\n                                <option value=\"PATIENT\"></option>\n                                \n                            </datalist>\n                      \n                        </div>\n                 \n    \n                </div>\n                <br>\n                <div class=\"text-center\">\n                    <span class=\"label \">{{message}}</span>\n                    <br>\n                    <hr style=\"background-color: black\"> \n                    <button  type=\"submit\" class=\"btn btn-success\">Register</button> &nbsp; &nbsp;\n                    <button   type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n    \n            </form>\n    \n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>user works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/about/about.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/admin/admin.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/admin/admin.component.ts ***!
          \******************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent() {
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                return AdminComponent;
            }());
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/afterlogin/afterlogin.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/afterlogin/afterlogin.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmdGVybG9naW4vYWZ0ZXJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/afterlogin/afterlogin.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/afterlogin/afterlogin.component.ts ***!
          \****************************************************/
        /*! exports provided: AfterloginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterloginComponent", function () { return AfterloginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AfterloginComponent = /** @class */ (function () {
                function AfterloginComponent() {
                }
                AfterloginComponent.prototype.ngOnInit = function () {
                };
                return AfterloginComponent;
            }());
            AfterloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-afterlogin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./afterlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/afterlogin/afterlogin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./afterlogin.component.css */ "./src/app/afterlogin/afterlogin.component.css")).default]
                })
            ], AfterloginComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.title = 'ocsAngular';
                }
                AppComponent.prototype.SignIn = function (loginform) {
                    var logincredentials = loginform.form.value;
                    console.log(logincredentials);
                    var isuservalid = this.service.LogIn(logincredentials);
                    // if(isuservalid)
                    // {
                    //   console.log("user is valid");
                    //   this.router.navigate(['home']);
                    // }
                    // else{
                    //   this.message="username/password is invalid";
                    // }
                };
                AppComponent.prototype.Logout = function () {
                    this.service.Logout();
                    this.router.navigate(['home']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
            /* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
            /* harmony import */ var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./doctor/doctor.component */ "./src/app/doctor/doctor.component.ts");
            /* harmony import */ var _receptionist_receptionist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./receptionist/receptionist.component */ "./src/app/receptionist/receptionist.component.ts");
            /* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
            /* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
            /* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
            /* harmony import */ var _listofdoctors_listofdoctors_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./listofdoctors/listofdoctors.component */ "./src/app/listofdoctors/listofdoctors.component.ts");
            /* harmony import */ var _listofpatients_listofpatients_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./listofpatients/listofpatients.component */ "./src/app/listofpatients/listofpatients.component.ts");
            /* harmony import */ var _listofappointments_listofappointments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./listofappointments/listofappointments.component */ "./src/app/listofappointments/listofappointments.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _afterlogin_afterlogin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./afterlogin/afterlogin.component */ "./src/app/afterlogin/afterlogin.component.ts");
            /* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
            /* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
            var parentModuleRoutes = [
                {
                    path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                },
                { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
                { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
                { path: "help", component: _help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"] },
                { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
                { path: "signin", component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"] },
                { path: "editprofile", component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__["EditprofileComponent"] },
                { path: "changepassword", component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_18__["ChangepasswordComponent"] },
                { path: "listofappointments", component: _listofappointments_listofappointments_component__WEBPACK_IMPORTED_MODULE_21__["ListofappointmentsComponent"] },
                { path: "listofdoctors", component: _listofdoctors_listofdoctors_component__WEBPACK_IMPORTED_MODULE_19__["ListofdoctorsComponent"] },
                { path: "listofpatients", component: _listofpatients_listofpatients_component__WEBPACK_IMPORTED_MODULE_20__["ListofpatientsComponent"] },
                { path: "afterlogin", component: _afterlogin_afterlogin_component__WEBPACK_IMPORTED_MODULE_25__["AfterloginComponent"] },
                { path: "delete/:No", component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_26__["DeleteComponent"] },
                { path: "doctor", component: _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__["DoctorComponent"] },
                { path: "patient", component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_16__["PatientComponent"] },
                { path: "appointment", component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_27__["AppointmentComponent"] }
                // {
                //   path:'afterlogin',component:AfterloginComponent,children:[{path:'editprofile',component:EditprofileComponent}]
                // },
                // {
                //   path:'afterlogin',component:AfterloginComponent,children:[{path:'changepassword',component:ChangepasswordComponent}]
                // },
                // {
                //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofappointments',component:ListofappointmentsComponent}]
                // },
                // {
                //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofdoctors',component:ListofdoctorsComponent}]
                // },
                // {
                //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofpatients',component:ListofpatientsComponent}]
                // }
                // {
                //   path:'aftersignup',component:SignupComponent,children:[{path:'signupdoc',component:SignupdocComponent}]
                // },
                // {
                //   path:'aftersignup',component:SignupComponent,children:[{path:'signuprecep',component:SignuprecepComponent}]
                // },
                // {
                //   path:'aftersignup',component:SignupComponent,children:[{path:'signuppat',component:SignuppatComponent}]
                // }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                        _help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"],
                        _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"],
                        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                        _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_14__["DoctorComponent"],
                        _receptionist_receptionist_component__WEBPACK_IMPORTED_MODULE_15__["ReceptionistComponent"],
                        _patient_patient_component__WEBPACK_IMPORTED_MODULE_16__["PatientComponent"],
                        _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__["EditprofileComponent"],
                        _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_18__["ChangepasswordComponent"],
                        _listofdoctors_listofdoctors_component__WEBPACK_IMPORTED_MODULE_19__["ListofdoctorsComponent"],
                        _listofpatients_listofpatients_component__WEBPACK_IMPORTED_MODULE_20__["ListofpatientsComponent"],
                        _listofappointments_listofappointments_component__WEBPACK_IMPORTED_MODULE_21__["ListofappointmentsComponent"],
                        _afterlogin_afterlogin_component__WEBPACK_IMPORTED_MODULE_25__["AfterloginComponent"],
                        _delete_delete_component__WEBPACK_IMPORTED_MODULE_26__["DeleteComponent"],
                        _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_27__["AppointmentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                        _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forRoot(parentModuleRoutes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]],
                    providers: [
                        _auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/appointment/appointment.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/appointment/appointment.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/appointment/appointment.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/appointment/appointment.component.ts ***!
          \******************************************************/
        /*! exports provided: AppointmentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function () { return AppointmentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AppointmentComponent = /** @class */ (function () {
                function AppointmentComponent(authService, router, dataService) {
                    this.authService = authService;
                    this.router = router;
                    this.dataService = dataService;
                    this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        appDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                }
                AppointmentComponent.prototype.ngOnInit = function () {
                    console.log("in appointment component");
                    var email = window.sessionStorage.getItem("email");
                    console.log(email);
                };
                AppointmentComponent.prototype.addAppointment = function () {
                    var _this = this;
                    console.log("in appointment details ....");
                    //this.user=registerfrom.form.value;
                    console.log(this.formdata.value);
                    var obsreg = this.dataService.addAppDetails(this.formdata.value);
                    obsreg.subscribe(function (res) {
                        _this.data = res;
                        if (_this.data.role == "PATIENT") {
                            console.log("inside iffffffff");
                        }
                        alert("Details entered Successfully");
                        console.log("data registered");
                        _this.router.navigate(['/afterlogin']);
                    });
                };
                return AppointmentComponent;
            }());
            AppointmentComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-appointment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment.component.css */ "./src/app/appointment/appointment.component.css")).default]
                })
            ], AppointmentComponent);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(router, http, service) {
                    this.router = router;
                    this.http = http;
                    this.service = service;
                    console.log("aaaaaaaaaaaa");
                    //this.flag=true;
                }
                AuthService.prototype.canActivate = function (route, state) {
                    // check if user has logged in
                    if (this.Isloggedin()) {
                        console.log("user has logged in");
                        return true;
                    }
                    else {
                        console.log("user has not logged in");
                        this.router.navigate(['/signin']);
                        return false;
                    }
                };
                AuthService.prototype.Isloggedin = function () {
                    if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "1") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "2") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "3") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "4") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.isadmin = function () {
                    if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "1") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.isdoctor = function () {
                    if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "3") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.ispatient = function () {
                    if (window.sessionStorage.getItem("isActive") != null
                        &&
                            window.sessionStorage.getItem("isActive") == "4") {
                        // some logic to check if person has logged in
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.function = function ($scope) {
                    $scope.id = [1];
                };
                AuthService.prototype.LogIn = function (logincredentials) {
                    var _this = this;
                    console.log("in auth");
                    var observable = this.service.selectForLogin(logincredentials);
                    observable.subscribe(function (result) {
                        console.log("hello");
                        _this.user = result;
                        console.log(_this.user);
                        console.log(_this.user.role);
                        window.sessionStorage.setItem('user1', _this.user.email);
                        if (_this.user.role == "ADMIN") {
                            console.log("equal");
                            window.sessionStorage.setItem("isActive", "1");
                            _this.router.navigate(["/afterlogin"]);
                        }
                        else if (_this.user.role == "RECEPTIONIST") {
                            window.sessionStorage.setItem("isActive", "2");
                            _this.router.navigate(["/afterlogin"]);
                        }
                        else if (_this.user.role == "DOCTOR") {
                            window.sessionStorage.setItem("isActive", "3");
                            _this.router.navigate(["/afterlogin"]);
                        }
                        else if (_this.user.role == "PATIENT") {
                            window.sessionStorage.setItem("isActive", "4");
                            _this.router.navigate(["/afterlogin"]);
                        }
                        else {
                            return false;
                        }
                    });
                    return true;
                };
                AuthService.prototype.getMessage = function () {
                    console.log(this.message);
                    return this.message;
                };
                AuthService.prototype.Logout = function () {
                    window.sessionStorage.setItem("isActive", "0");
                    this.router.navigate(['/signin']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/changepassword/changepassword.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/changepassword/changepassword.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/changepassword/changepassword.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/changepassword/changepassword.component.ts ***!
          \************************************************************/
        /*! exports provided: ChangepasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function () { return ChangepasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            var ChangepasswordComponent = /** @class */ (function () {
                function ChangepasswordComponent(router, service, route) {
                    this.router = router;
                    this.service = service;
                    this.route = route;
                    this.user = {
                        "password": ""
                    };
                }
                ChangepasswordComponent.prototype.ngOnInit = function () {
                };
                ChangepasswordComponent.prototype.updatepass = function (mypassform) {
                    var _this = this;
                    console.log(this.user);
                    var obsres = this.service.UpdatePass(this.user);
                    obsres.subscribe(function (result) {
                        console.log(result);
                        _this.router.navigate(['/afterlogin']);
                    });
                };
                return ChangepasswordComponent;
            }());
            ChangepasswordComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-changepassword',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")).default]
                })
            ], ChangepasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/contact/contact.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/data.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/data.service.ts ***!
          \*********************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataService = /** @class */ (function () {
                function DataService(http) {
                    this.http = http;
                    this.url = "http://localhost:6060/online_clinic_3.1/";
                    console.log("in data service");
                }
                DataService.prototype.register = function (user) {
                    return this.http.post("http://localhost:6060/online_clinic_3.1/user/", user);
                };
                DataService.prototype.getAllDoctors = function () {
                    console.log("all doctor details");
                    return this.http.get("http://localhost:6060/online_clinic_3.1/admin/list");
                };
                DataService.prototype.selectForLogin = function (logincredential) {
                    console.log(logincredential);
                    return this.http.post("http://localhost:6060/online_clinic_3.1/user/login/", logincredential);
                    console.log("record returned");
                };
                DataService.prototype.deleteDocById = function (No) {
                    return this.http.delete("http://localhost:6060/online_clinic_3.1/admin/" + No);
                };
                DataService.prototype.addDocDetails = function (doc) {
                    return this.http.post("http://localhost:6060/online_clinic_3.1/doctor", doc);
                };
                DataService.prototype.addPatDetails = function (pat) {
                    return this.http.post("http://localhost:6060/online_clinic_3.1/patient", pat);
                };
                DataService.prototype.UpdatePass = function (user) {
                    return this.http.put(this.url + "/user/changepass/" + user.userId, user);
                };
                DataService.prototype.addAppDetails = function (appt) {
                    return this.http.post("http://localhost:6060/online_clinic_3.1/patient/appointment", appt);
                };
                DataService.prototype.getAppByDocId = function (doc) {
                    return this.http.get("http://localhost:6060/online_clinic_3.1/doctor/" + doc);
                };
                DataService.prototype.getAppByPatId = function (pat) {
                    return this.http.get("http://localhost:6060/online_clinic_3.1/patient/" + pat);
                };
                DataService.prototype.getAllApp = function () {
                    console.log("all appointment details");
                    return this.http.get("http://localhost:6060/online_clinic_3.1/doctor/applist");
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/delete/delete.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/delete/delete.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/delete/delete.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/delete/delete.component.ts ***!
          \********************************************/
        /*! exports provided: DeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () { return DeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            var DeleteComponent = /** @class */ (function () {
                function DeleteComponent(route, router, dataService) {
                    this.route = route;
                    this.router = router;
                    this.dataService = dataService;
                }
                DeleteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.paramMap.subscribe(function (result) {
                        var No = result.get("No");
                        console.log(No);
                        var observableResult = _this.dataService.deleteDocById(No);
                        observableResult.subscribe(function (records) {
                            console.log(records);
                            _this.router.navigate(['listofdoctors']);
                        });
                    });
                };
                return DeleteComponent;
            }());
            DeleteComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-delete',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete.component.css */ "./src/app/delete/delete.component.css")).default]
                })
            ], DeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/doctor/doctor.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/doctor/doctor.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kb2N0b3IuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/doctor/doctor.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/doctor/doctor.component.ts ***!
          \********************************************/
        /*! exports provided: DoctorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function () { return DoctorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DoctorComponent = /** @class */ (function () {
                function DoctorComponent(authService, router, dataService) {
                    this.authService = authService;
                    this.router = router;
                    this.dataService = dataService;
                    this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        dName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        daysInWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        speciality: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                }
                DoctorComponent.prototype.ngOnInit = function () {
                };
                DoctorComponent.prototype.addDoctor = function () {
                    var _this = this;
                    console.log("in doctor details ....");
                    //this.user=registerfrom.form.value;
                    console.log(this.formdata.value);
                    var obsreg = this.dataService.addDocDetails(this.formdata.value);
                    obsreg.subscribe(function (res) {
                        _this.data = res;
                        if (_this.data.role == "DOCTOR") {
                            console.log("inside iffffffff");
                            alert("Details entered Successfully");
                        }
                        alert("Details entered Successfully");
                        console.log("data registered");
                        _this.router.navigate(['/afterlogin']);
                    });
                };
                return DoctorComponent;
            }());
            DoctorComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            DoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-doctor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor.component.css */ "./src/app/doctor/doctor.component.css")).default]
                })
            ], DoctorComponent);
            /***/ 
        }),
        /***/ "./src/app/editprofile/editprofile.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/editprofile/editprofile.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/editprofile/editprofile.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/editprofile/editprofile.component.ts ***!
          \******************************************************/
        /*! exports provided: EditprofileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function () { return EditprofileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EditprofileComponent = /** @class */ (function () {
                function EditprofileComponent() {
                }
                EditprofileComponent.prototype.ngOnInit = function () {
                };
                return EditprofileComponent;
            }());
            EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-editprofile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")).default]
                })
            ], EditprofileComponent);
            /***/ 
        }),
        /***/ "./src/app/emitterservice.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/emitterservice.service.ts ***!
          \*******************************************/
        /*! exports provided: EmitterserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterserviceService", function () { return EmitterserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EmitterserviceService = /** @class */ (function () {
                function EmitterserviceService() {
                    this.fire = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                EmitterserviceService.prototype.navBarSwitch = function (value) {
                    this.fire.emit(value);
                };
                EmitterserviceService.prototype.getEmittedValueForNavSwitch = function () {
                    return this.fire;
                };
                return EmitterserviceService;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], EmitterserviceService.prototype, "fire", void 0);
            EmitterserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmitterserviceService);
            /***/ 
        }),
        /***/ "./src/app/help/help.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/help/help.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/help/help.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/help/help.component.ts ***!
          \****************************************/
        /*! exports provided: HelpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function () { return HelpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HelpComponent = /** @class */ (function () {
                function HelpComponent() {
                }
                HelpComponent.prototype.ngOnInit = function () {
                };
                return HelpComponent;
            }());
            HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-help',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")).default]
                })
            ], HelpComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/listofappointments/listofappointments.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/listofappointments/listofappointments.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RvZmFwcG9pbnRtZW50cy9saXN0b2ZhcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/listofappointments/listofappointments.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/listofappointments/listofappointments.component.ts ***!
          \********************************************************************/
        /*! exports provided: ListofappointmentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListofappointmentsComponent", function () { return ListofappointmentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            var ListofappointmentsComponent = /** @class */ (function () {
                function ListofappointmentsComponent(route, router, dataService) {
                    this.route = route;
                    this.router = router;
                    this.dataService = dataService;
                }
                ListofappointmentsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var obsRes = this.dataService.getAllApp();
                    obsRes.subscribe(function (result) {
                        console.log(result);
                        _this.app = result;
                    });
                };
                return ListofappointmentsComponent;
            }());
            ListofappointmentsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            ListofappointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-listofappointments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listofappointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofappointments/listofappointments.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listofappointments.component.css */ "./src/app/listofappointments/listofappointments.component.css")).default]
                })
            ], ListofappointmentsComponent);
            /***/ 
        }),
        /***/ "./src/app/listofdoctors/listofdoctors.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/listofdoctors/listofdoctors.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RvZmRvY3RvcnMvbGlzdG9mZG9jdG9ycy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/listofdoctors/listofdoctors.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/listofdoctors/listofdoctors.component.ts ***!
          \**********************************************************/
        /*! exports provided: ListofdoctorsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListofdoctorsComponent", function () { return ListofdoctorsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ListofdoctorsComponent = /** @class */ (function () {
                function ListofdoctorsComponent(dataService, router) {
                    this.dataService = dataService;
                    this.router = router;
                }
                ListofdoctorsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var obsRes = this.dataService.getAllDoctors();
                    obsRes.subscribe(function (result) {
                        console.log(result);
                        _this.doctors = result;
                    });
                };
                return ListofdoctorsComponent;
            }());
            ListofdoctorsComponent.ctorParameters = function () { return [
                { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ListofdoctorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-listofdoctors',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listofdoctors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofdoctors/listofdoctors.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listofdoctors.component.css */ "./src/app/listofdoctors/listofdoctors.component.css")).default]
                })
            ], ListofdoctorsComponent);
            /***/ 
        }),
        /***/ "./src/app/listofpatients/listofpatients.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/listofpatients/listofpatients.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RvZnBhdGllbnRzL2xpc3RvZnBhdGllbnRzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/listofpatients/listofpatients.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/listofpatients/listofpatients.component.ts ***!
          \************************************************************/
        /*! exports provided: ListofpatientsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListofpatientsComponent", function () { return ListofpatientsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListofpatientsComponent = /** @class */ (function () {
                function ListofpatientsComponent() {
                }
                ListofpatientsComponent.prototype.ngOnInit = function () {
                };
                return ListofpatientsComponent;
            }());
            ListofpatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-listofpatients',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listofpatients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listofpatients/listofpatients.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listofpatients.component.css */ "./src/app/listofpatients/listofpatients.component.css")).default]
                })
            ], ListofpatientsComponent);
            /***/ 
        }),
        /***/ "./src/app/patient/patient.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/patient/patient.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/patient/patient.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/patient/patient.component.ts ***!
          \**********************************************/
        /*! exports provided: PatientComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function () { return PatientComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var PatientComponent = /** @class */ (function () {
                function PatientComponent(authService, router, dataService) {
                    this.authService = authService;
                    this.router = router;
                    this.dataService = dataService;
                    this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        pName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                }
                PatientComponent.prototype.ngOnInit = function () {
                };
                PatientComponent.prototype.addPatient = function () {
                    var _this = this;
                    console.log("in patient details ....");
                    //this.user=registerfrom.form.value;
                    console.log(this.formdata.value);
                    var obsreg = this.dataService.addPatDetails(this.formdata.value);
                    obsreg.subscribe(function (res) {
                        _this.data = res;
                        if (_this.data.role == "PATIENT") {
                            console.log("inside iffffffff");
                        }
                        alert("Details entered Successfully");
                        console.log("data registered");
                        _this.router.navigate(['/afterlogin']);
                    });
                };
                return PatientComponent;
            }());
            PatientComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-patient',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")).default]
                })
            ], PatientComponent);
            /***/ 
        }),
        /***/ "./src/app/receptionist/receptionist.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/receptionist/receptionist.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VwdGlvbmlzdC9yZWNlcHRpb25pc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/receptionist/receptionist.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/receptionist/receptionist.component.ts ***!
          \********************************************************/
        /*! exports provided: ReceptionistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionistComponent", function () { return ReceptionistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ReceptionistComponent = /** @class */ (function () {
                function ReceptionistComponent() {
                }
                ReceptionistComponent.prototype.ngOnInit = function () {
                };
                return ReceptionistComponent;
            }());
            ReceptionistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-receptionist',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receptionist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/receptionist/receptionist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receptionist.component.css */ "./src/app/receptionist/receptionist.component.css")).default]
                })
            ], ReceptionistComponent);
            /***/ 
        }),
        /***/ "./src/app/signin/signin.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signin/signin.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/signin/signin.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signin/signin.component.ts ***!
          \********************************************/
        /*! exports provided: SigninComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function () { return SigninComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _emitterservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emitterservice.service */ "./src/app/emitterservice.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SigninComponent = /** @class */ (function () {
                function SigninComponent(emtService, authService, router) {
                    this.emtService = emtService;
                    this.authService = authService;
                    this.router = router;
                }
                SigninComponent.prototype.ngOnInit = function () {
                };
                SigninComponent.prototype.SignIn = function (loginform) {
                    // if (this.email.length == 0) {
                    //   alert('enter email');
                    // } else if (this.password.length ==0) {
                    //   alert('enter password');
                    // } else {
                    //   if(this.email=='ADMIN' && this.role=='ADMIN')
                    //   {
                    //       sessionStorage['login_status'] = '1';
                    //       localStorage.setItem('email',this.email);
                    //       localStorage.setItem('flag','true');
                    //       this.router.navigate(['/afterlogin']);
                    //   }
                    //   else if(this.role=='RECEPTIONIST' && this.email=='RECEPTIONIST')
                    //   {
                    //       sessionStorage['login_status'] = '1';
                    //       localStorage.setItem('email',this.email);
                    //       localStorage.setItem('flag','true');
                    //      // this.emtService.navBarSwitch(true);
                    //       this.router.navigate(['/afterlogin']);
                    //   }else if(this.role=='DOCTOR' && this.email=='DOCTOR')
                    //   {
                    //       sessionStorage['login_status'] = '1';
                    //       localStorage.setItem('email',this.email);
                    //       localStorage.setItem('flag','true');
                    //      // this.emtService.navBarSwitch(true);
                    //       this.router.navigate(['/afterlogin']);
                    //   }
                    //   else if(this.role=='PATIENT' && this.email=='PATIENT')
                    //   {
                    //       sessionStorage['login_status'] = '1';
                    //       localStorage.setItem('email',this.email);
                    //       localStorage.setItem('flag','true');
                    //      // this.emtService.navBarSwitch(true);
                    //       this.router.navigate(['/afterlogin']);
                    //   }else{
                    //     alert("invalid login");
                    //     this.router.navigate(['']);
                    //   }
                    // }
                    console.log("in sign in");
                    var logincredentials = loginform.form.value;
                    this.message = this.authService.getMessage();
                    console.log(logincredentials);
                    var isuservalid = this.authService.LogIn(logincredentials);
                    console.log(isuservalid);
                    if (isuservalid) {
                        console.log("user is invalid");
                        //this.router.navigate(['home']);
                        this.message = "username/password is invalid";
                        console.log(this.message);
                    }
                };
                SigninComponent.prototype.onSignup = function () {
                    this.router.navigate(['/signup']);
                };
                return SigninComponent;
            }());
            SigninComponent.ctorParameters = function () { return [
                { type: _emitterservice_service__WEBPACK_IMPORTED_MODULE_2__["EmitterserviceService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")).default]
                })
            ], SigninComponent);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _emitterservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emitterservice.service */ "./src/app/emitterservice.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SignupComponent = /** @class */ (function () {
                // name:'';
                // email:'';
                // password:'';
                // role='';
                function SignupComponent(emtService, authService, router, dataService) {
                    this.emtService = emtService;
                    this.authService = authService;
                    this.router = router;
                    this.dataService = dataService;
                    this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                        role: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
                    });
                }
                SignupComponent.prototype.ngOnInit = function () {
                };
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
                SignupComponent.prototype.Register = function () {
                    var _this = this;
                    console.log("in register ....");
                    //this.user=registerfrom.form.value;
                    console.log(this.formdata.value);
                    var obsreg = this.dataService.register(this.formdata.value);
                    obsreg.subscribe(function (res) {
                        _this.data = res;
                        if (_this.data.role == "PATIENT") {
                            console.log("inside iffffffff");
                            alert("Registered Successfully");
                            _this.router.navigate(['/signin']);
                        }
                        else if (_this.data.role == "DOCTOR") {
                            console.log("inside iffffffff");
                            alert("Registered Successfully");
                            _this.router.navigate(['/signin']);
                        }
                        console.log("data registered");
                        //this.router.navigate(['login'])
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _emitterservice_service__WEBPACK_IMPORTED_MODULE_2__["EmitterserviceService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/user/user.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/user/user.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserComponent = /** @class */ (function () {
                function UserComponent() {
                }
                UserComponent.prototype.ngOnInit = function () {
                };
                return UserComponent;
            }());
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/sunbeam/Desktop/SUNBEAM/ocs_ui/ocsAngular9/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map