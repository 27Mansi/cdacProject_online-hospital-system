package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IDoctorDao;
import com.app.pojos.Appointment;
import com.app.pojos.Doctor;
@Service
@Transactional
public class DoctorServiceImpl implements IDoctorService{
	@Autowired
	private IDoctorDao dao;
	@Override
	public Doctor addDoctorDetails(Doctor d) {
		return dao.registerDoctor(d);
	}
	@Override
	public List<Doctor> getAllDoctors() {
		// TODO Auto-generated method stub
		return dao.getAllDoctors();
	}
	@Override
	public void deleteDoc(int docId) {
		Doctor docById=dao.getDocDetailsById(docId);
		if(docById!=null)
			dao.deleteDoctor(docById);
	}
	@Override
	public Doctor getDoctorDetails(int id) {
		// TODO Auto-generated method stub
		return dao.getDocDetailsById(id);
	}
	@Override
	public List<Appointment> getAppById(int docId) {
		// TODO Auto-generated method stub
		return dao.getAppById(docId);
	}
	@Override
	public List<Appointment> getAllApp() {
		// TODO Auto-generated method stub
		return dao.getAllApp();
	}

}
