package com.app.controller;

//import java.lang.ProcessBuilder.Redirect;
import java.util.List;

import javax.annotation.PostConstruct;

//import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.app.pojos.Admin;
import com.app.pojos.Doctor;

import com.app.pojos.Patient;
import com.app.service.IAdminService;
import com.app.service.IDoctorService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminRestController {
	@Autowired
	private IAdminService service;
	@Autowired
	private IDoctorService docService;

	@PostConstruct
	public void init() {
		System.out.println("in init " + service);
	}

	@PostMapping("/adminreg")
	public ResponseEntity<?> addAdminDetails(@RequestBody Admin a) {
		System.out.println("in add admin dtls " + a);
		try {
			return new ResponseEntity<Admin>(service.addAdminDetails(a), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

      @GetMapping("/list")
	  public ResponseEntity<?> getAllDoctors(){
	  System.out.println("getAllDoctor in admin controller!!!####"); 
	  List<Doctor> l1Doc=docService.getAllDoctors(); 
	  if(l1Doc.size()==0) 
		  return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	  
	  return new ResponseEntity<List<Doctor>>(l1Doc,HttpStatus.OK); 
	  }
      
      @GetMapping("/{docId}")
  	public ResponseEntity<?> getDocDetails(@PathVariable int docId) {
  		System.out.println("get doc dtls " + docId);
  		Doctor docDetails=docService.getDoctorDetails(docId);
  		if (docDetails == null)
  			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
  		return new ResponseEntity<Doctor>(docDetails, HttpStatus.OK);
  	}
	 
      @DeleteMapping("/{docId}")
  	public ResponseEntity<Void> deleteDocDetails(@PathVariable int docId) {
  		System.out.println("del doc dtls " + docId);
  		docService.deleteDoc(docId);
  		return new ResponseEntity<>(HttpStatus.OK);

  	}
}
