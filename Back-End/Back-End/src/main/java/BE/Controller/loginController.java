package BE.Controller;

import java.io.IOException;
import java.security.Principal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BE.Entity.RefreshToken;
import BE.Service.IRefreshTokenService;
import BE.Service.JWTService;
import BE.Service.JWTToken;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "api/v1/login")
@CrossOrigin("*")
public class loginController {
	
	@Autowired
	private JWTToken jwtToken;
	
	@Autowired
	private IRefreshTokenService refreshTokenService;
	
	@GetMapping("/refreshToken")
	private RefreshToken refreshToken(Authentication authentication){
		return refreshTokenService.createRefreshToken(authentication.getName());
	}


	@GetMapping("/tokenexprid/{token}")
	private boolean isTokenExprid(@PathVariable("token")String token) {
		return jwtToken.isTokenExpired(token);
	}
	
	
	@GetMapping("/Exprie/{token}")
	private Date Expried(@PathVariable("token")String token) {
		try {
			return jwtToken.extractExpiration(token);
		} catch (ExpiredJwtException ex) {
			throw ex;
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
