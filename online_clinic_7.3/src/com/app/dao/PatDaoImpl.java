package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.Appointment;
import com.app.pojos.Patient;
@Repository
public class PatDaoImpl implements IPatDao{
	@Autowired
	private SessionFactory sf;
	@Override
	public Patient registerPat(Patient p) {
		sf.getCurrentSession().persist(p);
		//sf.getCurrentSession().persist(r);
		return p;
	}
	@Override
	public Appointment addAppointment(Appointment a) {
		sf.getCurrentSession().persist(a);
		return a;
	}
	@Override
	public List<Appointment> getAppByPatId(int patId) {
		String jpql="select a from Appointment a left outer join fetch a.patApp where a.patApp.patId=:patId";
		List<Appointment> appList=sf.getCurrentSession().createQuery(jpql,Appointment.class).setParameter("patId", patId).getResultList();
		
		return appList;
	}

}
