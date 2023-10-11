package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Signup")
public class Signup {

	@Id 
	@Column(name="name")
	private String name;
	@Column(name="phno")
	private String phno;
	@Column(name="gender")
	private String gender;
	@Column(name="emailid")
	private String emailid;
	@Column(name="password")
	private String password;
	@Column(name="confirmpassword")
	private String confirmpassword;
		
	
}