package com.app.service;

import java.util.List;

import com.app.pojos.Appointment;
import com.app.pojos.Doctor;

public interface IDoctorService {
	Doctor addDoctorDetails(Doctor d);
	List<Doctor> getAllDoctors();
	void deleteDoc(int docId);
	Doctor getDoctorDetails(int id);
	List<Appointment> getAppById(int docId);
	List<Appointment> getAllApp();
}
