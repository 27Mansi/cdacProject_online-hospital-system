package com.app.pojos;



//import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jdk.nashorn.internal.ir.annotations.Ignore;

@Entity
@Table(name = "doctors")
public class Doctor {
	private Integer drId;
	private String dName,speciality;
	//private LocalDateTime strtTime,endTime;
	private int daysInWeek;
	private Integer contact, experience;
	private double fees;
	//private Receptionist receptionist;
	//doctor is a user
	private User u1;
	//a doctor has many appointments
	private List<Appointment> listOfApptDocHas = new ArrayList<>();
	//a doctor has many patients
	//private List<Patient> listOfPatients = new ArrayList<>();
	//private Admin owner;
	//private List<Ratings> ratings=new ArrayList<>();
	
	public Doctor() {
	}

	

	public Doctor(String dName, String speciality,int daysInWeek, Integer contact,
			Integer experience, double fees) {
		super();
		this.dName = dName;
		this.speciality = speciality;
		this.daysInWeek = daysInWeek;
		this.contact = contact;
		this.experience = experience;
		this.fees = fees;
	}




	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getDrId() {
		return drId;
	}

	public void setDrId(Integer drId) {
		this.drId = drId;
	}
	
	@Column(name = "dName",length =30)
	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}
	@Column(length =30)
	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	
	public int getDaysInWeek() {
		return daysInWeek;
	}



	public void setDaysInWeek(int daysInWeek) {
		this.daysInWeek = daysInWeek;
	}


	
	
	public Integer getContact() {
		return contact;
	}

	public void setContact(Integer contact) {
		this.contact = contact;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public double getFees() {
		return fees;
	}

	public void setFees(double fees) {
		this.fees = fees;
	}
//	@JsonIgnore
	@OneToMany(mappedBy = "drApp",fetch=FetchType.LAZY)
	@JsonIgnore
	public List<Appointment> getListOfApptDocHas() {
		return listOfApptDocHas;
	}

	public void setListOfApptDocHas(List<Appointment> listOfApptDocHas) {
		this.listOfApptDocHas = listOfApptDocHas;
	}
	
	
	@OneToOne
	@JoinColumn(name = "u_id")
	public User getU1() {
		return u1;
	}

	public void setU1(User u1) {
		this.u1 = u1;
	}



	
//	@OneToMany(mappedBy = "dr",cascade = CascadeType.ALL)
//	public List<Patient> getListOfPatients() {
//		return listOfPatients;
//	}
//
//	public void setListOfPatients(List<Patient> listOfPatients) {
//		this.listOfPatients = listOfPatients;
//	}
	
	
//	@ManyToOne
//	@JoinColumn(name = "rec_id")
//	public Receptionist getReceptionist() {
//		return receptionist;
//	}
//
//	public void setReceptionist(Receptionist receptionist) {
//		this.receptionist = receptionist;
//	}

//	
//	@ManyToOne
//	@JoinColumn(name = "id")
//	public Admin getOwner() {
//		return owner;
//	}
//
//
//
//	public void setOwner(Admin owner) {
//		this.owner = owner;
//	}

//	@OneToMany(mappedBy = "ownerDoc",cascade = CascadeType.ALL)
//
//	public List<Ratings> getRatings() {
//		return ratings;
//	}
//
//
//
//	public void setRatings(List<Ratings> ratings) {
//		this.ratings = ratings;
//	}



//	@Override
//	public String toString() {
//		return "Doctor [drId=" + drId + ", dName=" + dName + ", speciality=" + speciality + ", daysInWeek=" + daysInWeek
//				+ ", contact=" + contact + ", experience=" + experience + ", fees=" + fees + "]";
//	}

	
	
	
	
}
