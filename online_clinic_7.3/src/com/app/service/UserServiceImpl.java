package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserDao;

import com.app.pojos.User;
@Service
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	private IUserDao dao;
	@Override
	public User addUserDetails(User d) {
		
		return dao.addUserDetails(d);
	}
	@Override
	public User login(User u) {
		// TODO Auto-generated method stub
		return dao.login(u);
	}
	@Override
	public User getUserDetailsById(int userId) {
		// TODO Auto-generated method stub
		return dao.getUserDetailsById(userId);
	}
	@Override
	public void changePass(int userId, String newPassword) {
		User userById=dao.getUserDetailsById(userId);
		System.out.println(userId);
		userById.setPassword(newPassword);
		System.out.println(userId);
		if(userById!=null)
			dao.changePassword(userById);
	}
	

}
