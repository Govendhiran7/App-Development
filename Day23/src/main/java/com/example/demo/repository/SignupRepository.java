package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Signup;


@Repository
public interface SignupRepository extends JpaRepository<Signup, Integer>{
	Optional<Signup>findByUsername(String username);
}