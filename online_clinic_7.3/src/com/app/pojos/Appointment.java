package com.app.pojos;

//import java.time.LocalDate;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "appointments")
public class Appointment {
	private Integer appId;
	private Date appDate;
	private String appStat;
	//many to one mapping
	private Doctor drApp;
	private Receptionist recApp;
	//one to one mapping
	private Patient patApp;
	
	
	public Appointment() {
	}

	public Appointment(Date appDate, String appStat) {
		super();
		this.appDate = appDate;
		this.appStat = appStat;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getAppId() {
		return appId;
	}

	public void setAppId(Integer appId) {
		this.appId = appId;
	}
	@Temporal(TemporalType.DATE)
	@Column(name = "appDate")
	public Date getAppDate() {
		return appDate;
	}

	public void setAppDate(Date appDate) {
		this.appDate = appDate;
	}
	@Column(name = "appStat",length = 30)
	public String getAppStat() {
		return appStat;
	}

	public void setAppStat(String appStat) {
		this.appStat = appStat;
	}
	
	
	@ManyToOne
	@JoinColumn(name = "doc_id")
	public Doctor getDrApp() {
		return drApp;
	}

	public void setDrApp(Doctor drApp) {
		this.drApp = drApp;
	}
	
	@ManyToOne
	@JoinColumn(name = "rec_id")
	public Receptionist getRecApp() {
		return recApp;
	}

	public void setRecApp(Receptionist recApp) {
		this.recApp = recApp;
	}
	
	@ManyToOne
	@JoinColumn(name = "pat_id")
	public Patient getPatApp() {
		return patApp;
	}

	public void setPatApp(Patient patApp) {
		this.patApp = patApp;
	}

//	@Override
//	public String toString() {
//		return "Appointment [appId=" + appId + ", appDate=" + appDate + ", appStat=" + appStat + "]";
//	}
	
	
}
