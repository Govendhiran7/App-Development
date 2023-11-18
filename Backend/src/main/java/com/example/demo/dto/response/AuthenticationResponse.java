package com.example.demo.dto.response;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse 
{
	private String token;
    private String username;
    private String password;
	public Object getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Object getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}