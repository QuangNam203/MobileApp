package BE.Service;

import org.springframework.security.core.userdetails.UserDetailsService;

import BE.Entity.User;

public interface IUserService extends UserDetailsService{
	public User getUserByUsername(String username);
}	
