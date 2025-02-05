package BE.DTO;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class orderDTO {
	
	private int orderId;
	private int productId;
	private int userId;
	@DateTimeFormat(pattern = "dd-mm-yyyy")
	private Date tradingDayDate;
	
}	
