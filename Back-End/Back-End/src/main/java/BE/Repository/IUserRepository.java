package BE.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import BE.Entity.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer>{
	
	public User findByUsername(String username);
	
}
