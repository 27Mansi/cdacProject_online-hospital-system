package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Appointment;
import com.app.pojos.Doctor;
@Repository
@Transactional
public class DoctorDaoImpl implements IDoctorDao{
	@Autowired
	private SessionFactory sf;
	@Override
	public Doctor registerDoctor(Doctor d) {
		sf.getCurrentSession().save(d);
		//sf.getCurrentSession().persist(r);
		return d;
	}
	@Override
	public List<Doctor> getAllDoctors() {
		String jpql="select d from Doctor d";
		 List<Doctor>iterable=sf.getCurrentSession().createQuery(jpql,Doctor.class).getResultList();
		for (Doctor iterable_element : iterable) {
			System.out.println("in dao data="+iterable_element);
		}
		return iterable;
//		List<Doctor> l1=manager.createQuery(jpql,Doctor.class).getResultList();
//		l1.size();
//		return l1;
	}
	@Override
	public void deleteDoctor(Doctor d) {
		sf.getCurrentSession().delete(d);
	}
	@Override
	public Doctor getDocDetailsById(int docId) {
		// TODO Auto-generated method stub
		return sf.getCurrentSession().get(Doctor.class,docId);
	}
	@Override
	public List<Appointment> getAppById(int docId) {
		String jpql="select a from Appointment a left outer join fetch a.drApp where a.drApp.drId=:docId";
		List<Appointment> appList=sf.getCurrentSession().createQuery(jpql,Appointment.class).setParameter("docId", docId).getResultList();
		
		return appList;
	}
	@Override
	public List<Appointment> getAllApp() {
		String jpql="select a from Appointment a";
		 List<Appointment>iterable1=sf.getCurrentSession().createQuery(jpql,Appointment.class).getResultList();
		for (Appointment iterable_element : iterable1) {
			System.out.println("in dao data="+iterable_element);
		}
		return iterable1;
	}
}
