package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "receptionist")
public class Receptionist {
	private Integer recepId;
	private String rName, patStatus;
	//recep is a user
	private User u3;
	//one receptionist manages many appointments
	private List<Appointment> numOfApptRecepMng = new ArrayList<>();
	//one receptionist manages many doctors
	//private List<Doctor> listOfDr = new ArrayList<>();
	//one receptionist manages many patients
	//private List<Patient> listOfPatients = new ArrayList<>();
	//private Admin owner;
	
	public Receptionist() {
	}

	public Receptionist(String rName, String patStatus) {
		super();
		this.rName = rName;
		this.patStatus = patStatus;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getRecepId() {
		return recepId;
	}

	public void setRecepId(Integer recepId) {
		this.recepId = recepId;
	}
	@Column(length = 30,name = "rName")
	public String getrName() {
		return rName;
	}

	public void setrName(String rName) {
		this.rName = rName;
	}
	@Column(length = 50)
	public String getPatStatus() {
		return patStatus;
	}

	public void setPatStatus(String patStatus) {
		this.patStatus = patStatus;
	}
	
	@OneToMany(mappedBy = "recApp", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
	
	public List<Appointment> getNumOfApptRecepMng() {
		return numOfApptRecepMng;
	}
	

	public void setNumOfApptRecepMng(List<Appointment> numOfApptRecepMng) {
		this.numOfApptRecepMng = numOfApptRecepMng;
	}
	
	@OneToOne
	@JoinColumn(name = "u_id")
	public User getU3() {
		return u3;
	}

	public void setU3(User u3) {
		this.u3 = u3;
	}

	
	
//	@OneToMany(mappedBy = "receptionist", cascade = CascadeType.ALL)
//	public List<Doctor> getListOfDr() {
//		return listOfDr;
//	}
//
//	public void setListOfDr(List<Doctor> listOfDr) {
//		this.listOfDr = listOfDr;
//	}
//	
//	@OneToMany(mappedBy = "receptnst",cascade = CascadeType.ALL)
//
//	public List<Patient> getListOfPatients() {
//		return listOfPatients;
//	}
//
//	public void setListOfPatients(List<Patient> listOfPatients) {
//		this.listOfPatients = listOfPatients;
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
	
//	@Override
//	public String toString() {
//		return "Receptionist [recepId=" + recepId + ", rName=" + rName + ", patStatus=" + patStatus + "]";
//	}
	
	
}
