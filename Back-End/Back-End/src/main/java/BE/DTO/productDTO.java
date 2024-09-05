package BE.DTO;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class productDTO {
	private int id;
	private String name;
	private int ram;
	private int memory;
	private String color;
	private int price;
	private String publisher;
	private Date goodsDate;
	private String status;
}
