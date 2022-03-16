package com.app.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Receptionist;
import com.app.service.IRecepService;

@RestController
@RequestMapping("/receptionist")
@CrossOrigin
public class RecepRestController {
	@Autowired
	private IRecepService service;
	
	@PostConstruct
	public void init() {
		System.out.println("in init "+service);
	}
	
	@PostMapping("/receptionistreg")
	public ResponseEntity<?> addRecepDetails(@RequestBody Receptionist r) {
		System.out.println("in add receptionist dtls " + r);
		try {
			return new ResponseEntity<Receptionist>(service.addRecepDetails(r), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
}
}
