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
	
	public List<Signup> getSignup(){
		return sr.findAll();
	}
	public void save(Signup se)
	{
		sr.save(se);
	}
	
	public void update(Signup se)
	{
		sr.save(se);
	}
	
	public void delete(int id)
	{
		sr.deleteById(id);	
	}

}