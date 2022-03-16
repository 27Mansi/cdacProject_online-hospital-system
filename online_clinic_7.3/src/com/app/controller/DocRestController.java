package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Appointment;
import com.app.pojos.Doctor;

import com.app.service.IDoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DocRestController {
	@Autowired
	private IDoctorService service;
	
	@PostConstruct
	public void init() {
		System.out.println("in init "+service);
	}
	
	@PostMapping
	public ResponseEntity<?> addDocDetails(@RequestBody Doctor d) {
		System.out.println("in add user dtls " + d);
		try {
			return new ResponseEntity<Doctor>(service.addDoctorDetails(d), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	  @GetMapping("/{docId}")
	  	public ResponseEntity<?> getDocDetails(@PathVariable int docId) {
	  		System.out.println("get doc dtls " + docId);
	  		List<Appointment> appt=service.getAppById(docId);
	  		if (appt == null)
	  			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	  		return new ResponseEntity<List<Appointment>>(appt, HttpStatus.OK);
	  	}
	  
	  @GetMapping("/applist")
	  public ResponseEntity<?> getAllApp(){
	 // System.out.println("getAllDoctor in admin controller!!!####"); 
	  List<Appointment> l1=service.getAllApp();
	  if(l1.size()==0) 
		  return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	  
	  return new ResponseEntity<List<Appointment>>(l1,HttpStatus.OK); 
	  }
}
