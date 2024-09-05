package BE.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class onceProductDTO {
	private int id;
	private String name;
	private int ram;
	private int memory;
	private String color;
	private int price;
}
