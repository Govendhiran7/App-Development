package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Signup;
import com.example.demo.repository.SignupRepository;

@Service
public class SignupService {

	@Autowired
	private SignupRepository sr;
	
	public List<Signup> getSignupDetails(){
		return sr.findAll();
	}
	public void saveData(Signup le)
	{
		sr.save(le);
	}
	
	public void updateData(Signup se) {
	    sr.save(se);
	}

	public void deleteData(String id) {
	    sr.deleteById(id);
	}
	
	
	
	
}