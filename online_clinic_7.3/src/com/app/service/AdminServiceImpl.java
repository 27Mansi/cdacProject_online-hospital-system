package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.dao.IDoctorDao;
import com.app.pojos.Admin;
import com.app.pojos.Doctor;
//import com.app.pojos.Patient;
@Service
@Transactional
public class AdminServiceImpl implements IAdminService{
	@Autowired
	private IAdminDao dao;
	//private IDoctorDao dao2;
	@Override
	public Admin addAdminDetails(Admin a) {
		return dao.registerAdmin(a);
	}
	
//	@Override
//	public List<Patient> getAllPatients() {
//		// TODO Auto-generated method stub
//		return dao.getAllPatients();
//	}

}
