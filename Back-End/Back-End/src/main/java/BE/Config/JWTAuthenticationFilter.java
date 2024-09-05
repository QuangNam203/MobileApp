package BE.Config;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import BE.Entity.User;
import BE.Service.IUserService;
import BE.Service.JWTService;
import BE.Service.JWTToken;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JWTAuthenticationFilter extends AbstractAuthenticationProcessingFilter{

	private IUserService userService;
	
	private JWTToken jwtToken = new JWTToken();
	
	private JWTService jwtService = new JWTService();

	public JWTAuthenticationFilter(
			String url, 
			AuthenticationManager authManager,
			IUserService userService) 
	{
		super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
        this.userService = userService;
	}

	@Override
	public Authentication attemptAuthentication(
			HttpServletRequest request, 
			HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		// TODO Auto-generated method stub
		return getAuthenticationManager().authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getParameter("username"), 
						request.getParameter("password"), 
						Collections.emptyList()
					)
			);
	}
	
	@Override
	protected void successfulAuthentication(
			HttpServletRequest request, 
			HttpServletResponse response, 
			FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		String username = authResult.getName();
		
		User user = userService.getUserByUsername(username);
		
		jwtToken.createToken(response, user);

	}

}
