package com.app.pojos;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class User {
	private Integer userId;
	private String name,email,password;
	//enum Role in user
	private Role role;
	//one to one mapping as user is a common table among patient,doctor and receptionist
	private Doctor doc;
	private Patient pat;
	private Receptionist rec;
	private Admin admin;
	
	public User() {
	}

	
	
	public User(String name, String email, String password, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	@Column(length = 30)
	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	@Column(length = 30,unique = true)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	@Column(length = 30,nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name = "user_role")
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	
	@OneToOne(mappedBy = "u1", fetch=FetchType.EAGER)
	@JsonIgnore
	public Doctor getDoc() {
		return doc;
	}



	public void setDoc(Doctor doc) {
		this.doc = doc;
	}


	@OneToOne(mappedBy = "u2", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JsonIgnore
	public Patient getPat() {
		return pat;
	}



	public void setPat(Patient pat) {
		this.pat = pat;
	}


	@OneToOne(mappedBy = "u3", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JsonIgnore
	public Receptionist getRec() {
		return rec;
	}



	public void setRec(Receptionist rec) {
		this.rec = rec;
	}
	
	

	@OneToOne(mappedBy = "u4", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JsonIgnore
	public Admin getAdmin() {
		return admin;
	}



	public void setAdmin(Admin admin) {
		this.admin = admin;
	}



	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ","
				+ " password=" + password + ", role="
				+ role + "]";
	}

	
	
	
}
