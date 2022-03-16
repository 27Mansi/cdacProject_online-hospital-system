package com.app.dao;

import java.util.List;

//import javax.persistence.EntityManager;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.Admin;
import com.app.pojos.Doctor;

//import com.app.pojos.Patient;
@Repository
public class AdminDaoImpl implements IAdminDao{
	@Autowired
	private SessionFactory sf;
	//private EntityManager manager;
	@Override
	public Admin registerAdmin(Admin a) {
		sf.getCurrentSession().persist(a);
		return a;
	}
	
//	@Override
//	public List<Patient> getAllPatients() {
//		String jpql="select p from patients p";
//		return sf.getCurrentSession().createQuery(jpql,Patient.class).getResultList();
////		List<Patient> l2=manager.createQuery(jpql,Patient.class).getResultList();
////		l2.size();
////		return l2;
//	}
	
}
