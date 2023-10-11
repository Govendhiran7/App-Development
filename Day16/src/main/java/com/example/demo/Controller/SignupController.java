package com.example.demo.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Login;
import com.example.demo.entity.Signup;
import com.example.demo.service.SignupService;

@RestController
@RequestMapping("/api/SignupEntitys")
@CrossOrigin(origins = "http://localhost:3000") 

public class SignupController {

	@Autowired
	private SignupService ss;
	
	@GetMapping("/getsignup")
	 public List<Signup> getSignupDetails()
	 {
		 return ss.getSignupDetails();
	 }
	 @PostMapping("/postsignup")
	 public void saveData(@RequestBody Signup le)
	 {
		 ss.saveData(le);
	 }
	 
	 @PutMapping("/putsignup/{id}")
	 public void updateData(@RequestBody Signup le,@PathVariable String id)
	 {
		
		 ss.updateData(le);
	 }
	 @DeleteMapping("/deletesignup/{id}")
	 public void DeleteData(@PathVariable String id)
	 {
		ss.deleteData(id);
	 }
	 
	 
	
	
}