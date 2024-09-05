package BE.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import BE.Entity.User;
import BE.Service.IUserService;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin("*")
public class userController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IUserService userService;
	
	@GetMapping("username/{username}")
	private ResponseEntity<?> getUsername(@PathVariable(name = "username") String usernme){
		User user = userService.getUserByUsername(usernme);
		
		return new ResponseEntity<User>(user,org.springframework.http.HttpStatus.OK);
	}
	
}
