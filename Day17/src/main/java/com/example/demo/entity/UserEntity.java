package com.example.demo.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("unused")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="UserDetails")
public class  UserEntity{

	@Id 
    @GeneratedValue(strategy = GenerationType.AUTO) 

	private Long id;

    private String name;
    private String email;
    private String gender;
    private String contact;
    private String ctc;
    private String qualification;
    private String domain;
    private String github;
    private String linkedin;
    private String other;
    private String resume;
}
