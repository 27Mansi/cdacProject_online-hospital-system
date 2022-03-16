package com.app.dao;

import java.util.List;

import com.app.pojos.Appointment;
import com.app.pojos.Patient;

public interface IPatDao {
	Patient registerPat(Patient p);
	Appointment addAppointment(Appointment a); 
	 List<Appointment> getAppByPatId(int patId);
}
