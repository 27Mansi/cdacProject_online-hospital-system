package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.Receptionist;
@Repository
public class RecepDaoImpl implements IRecepDao{
	@Autowired
	private SessionFactory sf;
	
	@Override
	public Receptionist registerRecep(Receptionist r) {
		sf.getCurrentSession().save(r);
		//sf.getCurrentSession().persist(r);
		return r;
	}

}
