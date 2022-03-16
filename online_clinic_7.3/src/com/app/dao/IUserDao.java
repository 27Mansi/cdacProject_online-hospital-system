package com.app.dao;


import com.app.pojos.User;

public interface IUserDao {
	User addUserDetails(User d);
	User login(User u);
	User getUserDetailsById(int userId);
	void changePassword(User u);
}
