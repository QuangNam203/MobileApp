package BE.Entity;

import java.io.Serializable;
import java.time.Instant;
import java.util.Date;

import org.hibernate.annotations.Collate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RefreshToken implements Serializable{
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "token", nullable = false, unique = true)
	private String token;
	
	@Column(name = "expiryDate", nullable = false)
	private Date expiryDate;
	
	@OneToOne
	@JoinColumn(name= "user_id", referencedColumnName = "id")
	private User user;
	
}
