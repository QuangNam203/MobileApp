package BE.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class LoginInfoUser {
	private String token;
	private String username;
	private String firstName;
	private String lastName;
	private String role;
}
