package com.app.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "patients")
public class Patient {
	private Integer patId;
	private String pName;
	private Date dob;
	private String gender;
	private Integer contact;
	//patient is a user
	private User u2;
	//one patient has one appointment
	//private Appointment appForPatient;
	private List<Appointment> appForPatient=new ArrayList<>();
	//patient has a adress
	//private Address adr;
	//private Doctor dr;
	//private Receptionist receptnst;
	//private Admin owner;
	//private List<Ratings> ratings=new ArrayList<>();
	public Patient() {
	}

	public Patient(String pName, Date dob, String gender, Integer contact) {
		super();
		this.pName = pName;
		this.dob = dob;
		this.gender = gender;
		this.contact = contact;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getPatId() {
		return patId;
	}

	public void setPatId(Integer patId) {
		this.patId = patId;
	}
	@Column(name = "pName",length = 30)
	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}
	@Temporal(TemporalType.DATE)
	@Column(name = "dob")
	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	@Column(length = 10)
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	@Column(name = "contact")
	public Integer getContact() {
		return contact;
	}

	public void setContact(Integer contact) {
		this.contact = contact;
	}
	
	@OneToMany(mappedBy = "patApp",cascade = CascadeType.ALL,fetch=FetchType.EAGER,orphanRemoval = true)
	@JsonIgnore
	public List<Appointment> getAppForPatient() {
		return appForPatient;
	}
	public void setAppForPatient(List<Appointment> appForPatient) {
		this.appForPatient = appForPatient;
	}
	//helper method
	public void addAppointment(Appointment a)
	{
		appForPatient.add(a);
		a.setPatApp(this);
	}
	
	@OneToOne
	@JoinColumn(name = "u_id")
	public User getU2() {
		return u2;
	}

	public void setU2(User u2) {
		this.u2 = u2;
	}


	
	
//	@OneToOne(mappedBy = "patnt",cascade = CascadeType.ALL)
//	public Address getAdr() {
//		return adr;
//	}
//
//	public void setAdr(Address adr) {
//		this.adr = adr;
//	}
	
//	@ManyToOne
//	@JoinColumn(name="doc_id")
//	public Doctor getDr() {
//		return dr;
//	}
//
//	public void setDr(Doctor dr) {
//		this.dr = dr;
//	}
	
//	@ManyToOne
//	@JoinColumn(name="rec_id")
//	public Receptionist getReceptnst() {
//		return receptnst;
//	}
//
//	public void setReceptnst(Receptionist receptnst) {
//		this.receptnst = receptnst;
//	}
	
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
	
	
//	@OneToMany(mappedBy = "ownerPat",cascade = CascadeType.ALL)
//	public List<Ratings> getRatings() {
//		return ratings;
//	}
//
//	public void setRatings(List<Ratings> ratings) {
//		this.ratings = ratings;
//	}

	@Override
	public String toString() {
		return "Patient [patId=" + patId + ", pName=" + pName + ","
				+ " dob=" + dob + ", gender=" + gender + ",contact=" + contact + "]";
	}
	
	
}
