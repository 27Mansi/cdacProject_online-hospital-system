package com.app.service;


import com.app.pojos.User;

public interface IUserService {
	User addUserDetails(User d);
	User login(User u);
	User getUserDetailsById(int userId);
	void changePass(int userId, String newPassword);
}
