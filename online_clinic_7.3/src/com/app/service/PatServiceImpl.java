package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IPatDao;
import com.app.pojos.Appointment;
import com.app.pojos.Patient;
@Service
@Transactional
public class PatServiceImpl implements IPatService{
	@Autowired
	private IPatDao dao;
	@Override
	public Patient addPatDetails(Patient p) {
		
		return dao.registerPat(p);
	}
	@Override
	public Appointment addAppointment(Appointment a) {
		// TODO Auto-generated method stub
		return dao.addAppointment(a);
	}
	@Override
	public List<Appointment> getAppByPatId(int patId) {
		// TODO Auto-generated method stub
		return dao.getAppByPatId(patId);
	}
	
}
