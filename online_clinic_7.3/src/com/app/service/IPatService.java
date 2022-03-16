package com.app.service;

import java.util.List;

import com.app.pojos.Appointment;
import com.app.pojos.Patient;

public interface IPatService {
	Patient addPatDetails(Patient p);
	Appointment addAppointment(Appointment a);
	List<Appointment> getAppByPatId(int patId);
}
