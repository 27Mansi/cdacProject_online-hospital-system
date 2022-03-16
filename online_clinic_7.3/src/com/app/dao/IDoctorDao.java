package com.app.dao;

import java.util.List;

import com.app.pojos.Appointment;
import com.app.pojos.Doctor;

public interface IDoctorDao {
 Doctor registerDoctor(Doctor d);
 List<Doctor> getAllDoctors();
 Doctor getDocDetailsById(int docId);
 void deleteDoctor(Doctor d);
 List<Appointment> getAppById(int docId);
 List<Appointment> getAllApp();
 
}
