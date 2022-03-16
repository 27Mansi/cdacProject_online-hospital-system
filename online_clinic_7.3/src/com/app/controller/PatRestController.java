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
import com.app.pojos.Patient;
import com.app.service.IPatService;


@RestController
@RequestMapping("/patient")
@CrossOrigin
public class PatRestController {
	@Autowired
	private IPatService service;
	@PostConstruct
	public void init() {
		System.out.println("in init "+service);
	}
	@PostMapping
	public ResponseEntity<?> addPatDetails(@RequestBody Patient p) {
		System.out.println("in add patient dtls " + p);
		try {
			return new ResponseEntity<Patient>(service.addPatDetails(p), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@PostMapping("/appointment")
	public ResponseEntity<?> addAppointment(@RequestBody Appointment a) {
		System.out.println(a);
		Appointment appt = service.addAppointment(a);
		if(appt!=null)
		{
			return new ResponseEntity<Appointment>(a,HttpStatus.OK);
		}
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	 @GetMapping("/{patId}")
	  	public ResponseEntity<?> getDocDetails(@PathVariable int patId) {
	  		System.out.println("get doc dtls " + patId);
	  		List<Appointment> appt=service.getAppByPatId(patId);
	  		if (appt == null)
	  			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	  		return new ResponseEntity<List<Appointment>>(appt, HttpStatus.OK);
	  	}
}
