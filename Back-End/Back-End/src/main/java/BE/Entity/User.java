package BE.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "`User`")
public class User implements Serializable{
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "username", length = 50, nullable = false, unique = true)
	private String username;
	
	@Column(name = "`password`", length = 800, nullable = false)
	private String password;
	
	@Column(name = "`firstname`", length = 50, nullable = false)
	private String firstName;
	
	@Column(name = "`lastname`", length = 50, nullable = false)
	private String lastName;
	
	@Column(name = "`role`", nullable = false)
	@Convert(converter = convertUserRole.class)
	private userRole role;
	
}
