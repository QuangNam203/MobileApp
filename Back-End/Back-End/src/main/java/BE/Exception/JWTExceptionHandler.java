package BE.Exception;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException.Unauthorized;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import io.jsonwebtoken.ExpiredJwtException;

@ControllerAdvice
public class JWTExceptionHandler extends ResponseEntityExceptionHandler{
	
	@Autowired
	private MessageSource messageSource;
	
	private String getMessage(String key) {
		return messageSource.getMessage(
				key, 
				null,
				"Default message",
				LocaleContextHolder.getLocale());	
	}
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleSecurityException(Exception exception){
		return new ResponseEntity<Exception>(exception,HttpStatus.OK);
	}
	
	@ExceptionHandler(Unauthorized.class)
	public ResponseEntity<String> handleUnauthorizedException(Unauthorized ex){
		String mess = "401";
		return new ResponseEntity<String>(mess,HttpStatus.UNAUTHORIZED);
	}
	
}
