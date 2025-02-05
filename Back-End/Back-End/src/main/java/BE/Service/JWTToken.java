package BE.Service;

import java.io.IOException;
import java.util.Collections;
import java.util.Date;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import BE.DTO.JwtResponse;
import BE.DTO.LoginInfoUser;
import BE.Entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTToken {
	public static final long EXPIRATION_TIME = 6000000;
	private static final String SECRET = "123456ASC123DCACS123DCAAADDA21231213ASDQWFXCAWQE123213213ZASDK123i5980909098123";
    private static final String PREFIX_TOKEN = "Bearer";
    private static final String AUTHORIZATION = "Authorization";
    
    @Autowired
    private IRefreshTokenService refreshTokenService;
    
    public String extractUsername(String token) {
		return extractClaims(token, Claims::getSubject);
	}
	
	public Date extractExpiration(String token) {
		return extractClaims(token, Claims::getExpiration);
	}
    
    public <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {
    	final Claims claims = extractAllClaims(token);
    	return claimsResolver.apply(claims);
    }
    
    public Boolean isTokenExpired(String token) {
    	boolean result = extractExpiration(token).before(new Date());
		return result;
	}
    
    private Claims extractAllClaims(String token) {
    	return Jwts.parserBuilder()
				.setSigningKey(SECRET)
				.build()
				.parseClaimsJws(token)
				.getBody();
    }
    
    
    public String createToken(HttpServletResponse response, User user) throws IOException{
    	String JWT = Jwts.builder()
    			.setSubject(user.getUsername())
    			.setIssuedAt(new Date(System.currentTimeMillis()))
    			.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
    			.signWith(SignatureAlgorithm.HS256, SECRET)
    			.compact();
    	
    	LoginInfoUser userDto = new LoginInfoUser(
    			JWT, 
    			user.getUsername(),
    			user.getFirstName(),
    			user.getLastName(), 
    			user.getRole().toString());
    	
    	
    	ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
    	String json = ow.writeValueAsString(userDto);
    	
    	response.setContentType("application/json;charset=UTF-8");
    	response.getWriter().write(json);
    	return JWT;
    }
          
    
    public static Authentication parseTokenToUser(HttpServletRequest request) {
    	 String token = request.getHeader(AUTHORIZATION);
    	 if (token == null) {
         	return null;
         }
    	 
    	 String username = Jwts.parser()
    			 .setSigningKey(SECRET)
    			 .parseClaimsJws(token.replace(PREFIX_TOKEN, "").toString().trim())
    			 .getBody()
    			 .getSubject();
    	 
    	 return username != null ? new UsernamePasswordAuthenticationToken(username, null,Collections.emptyList()) : null;
    }
    
}
