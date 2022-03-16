package com.app.pojos;

//import java.util.ArrayList;
//import java.util.List;

import javax.persistence.*;
@Entity
@Table(name = "admin")
public class Admin {
	private Integer id;
	private String name,email,password;
	private User u4;
	//private List<Doctor> doctors = new ArrayList<>();
	//private List<Patient> patients = new ArrayList<>();
	//private List<Receptionist> receptionist = new ArrayList<>();

	public Admin() {
	}
	
	
	public Admin(String name, String email, String password) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	
	
	
//
//	@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL)
//	public List<Doctor> getDoctors() {
//		return doctors;
//	}
//
//	public void setDoctors(List<Doctor> doctors) {
//		this.doctors = doctors;
//	}
	
//	@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL)
//	public List<Patient> getPatients() {
//		return patients;
//	}
//
//	public void setPatients(List<Patient> patients) {
//		this.patients = patients;
//	}
//	
//	@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL)
//	public List<Receptionist> getReceptionist() {
//		return receptionist;
//	}
//
//	public void setReceptionist(List<Receptionist> receptionist) {
//		this.receptionist = receptionist;
//	}
	@OneToOne
	@JoinColumn(name = "u_id")
	public User getU4() {
		return u4;
	}


	public void setU4(User u4) {
		this.u4 = u4;
	}


	@Override
	public String toString() {
		return "Admin [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}

	
	
	
	
}
