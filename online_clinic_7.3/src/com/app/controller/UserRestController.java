package com.app.controller;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.app.pojos.Doctor;
import com.app.pojos.Role;
import com.app.pojos.User;

import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserRestController {
	@Autowired
	private IUserService service;
	
	@PostConstruct
	public void init() {
		System.out.println("in init "+service);
	}
	
	@PostMapping
	public ResponseEntity<?> addUserDetails(@RequestBody User d) {
		System.out.println("in add user dtls " + d);
		try {
			return new ResponseEntity<User>(service.addUserDetails(d), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@PostMapping("/login") // @RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> processLoginForm(@RequestBody User u) {
		System.out.println("in login"+u);
		User u1=service.login(u);
		System.out.println(u1);
		if(u1!=null)
			return new ResponseEntity<User>(u1,HttpStatus.OK);
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	
	@GetMapping("/changepass/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable int userId)
	{
		System.out.println("get user dtls " + userId);
  		User userDetails=service.getUserDetailsById(userId);
  		if (userDetails == null)
  			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
  		return new ResponseEntity<User>(userDetails, HttpStatus.OK);
	}
	
	@PutMapping("/changepass/{userId}")
	public ResponseEntity<?> changePassword(@PathVariable int userId, @RequestBody User user)
	{
		System.out.println(userId);
		service.changePass(userId, user.getPassword());
		System.out.println("User"+userId);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
}























