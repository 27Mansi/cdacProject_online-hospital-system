package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.app.pojos.User;

@Repository
public class UserDaoImpl implements IUserDao{

	@Autowired
	private SessionFactory sf;
	
	@Override
	public User addUserDetails(User d) {
		sf.getCurrentSession().persist(d);
		return d;
	}

	@Override
	public User login(User u) {
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", u.getEmail())
				.setParameter("pass", u.getPassword()).getSingleResult();
	}

	@Override
	public User getUserDetailsById(int userId) {
		// TODO Auto-generated method stub
		return sf.getCurrentSession().get(User.class, userId);
	}

	@Override
	public void changePassword(User u) {
		sf.getCurrentSession().update(u);
	}



}
