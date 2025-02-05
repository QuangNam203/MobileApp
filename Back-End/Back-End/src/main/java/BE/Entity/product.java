package BE.Entity;

import java.io.Serializable;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@NoArgsConstructor
@Data
public class product implements Serializable{
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name", length = 50, nullable = false)
	private String name;
	
	@Column(name = "RAM", nullable = false)
	private int ram;
	
	@Column(name = "Memory", nullable = false)
	private int memory;
	
	@Column(name = "color", length = 50, nullable = false)
	private String color;
	
	@Column(name = "price", nullable = false)
	private int price;
	
	@Column(name = "publisher", length = 50, nullable = false)
	private String publisher;
	
	@Column(name = "goodsDate", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date goodsDate;
	
	@Column(name = "`status`")
	private String status;
	
	@OneToOne(mappedBy = "product")
	private order order;
	
}

















