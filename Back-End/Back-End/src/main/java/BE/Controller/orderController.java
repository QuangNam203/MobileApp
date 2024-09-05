package BE.Controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BE.DTO.orderDTO;
import BE.Entity.order;
import BE.Form.createOrderForm;
import BE.Service.IOrderService;

@RestController
@RequestMapping("api/v1/order")
public class orderController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IOrderService iOrderService;
	
	@PostMapping("/orderForm")
	private void createOrder(@RequestBody createOrderForm form) {
		iOrderService.createOrder(form);
	}
	
	@GetMapping()
	private ResponseEntity<?> getAll(Pageable pageable){
		Page<order> entities = iOrderService.getAll(pageable);
		
		List<orderDTO> dto = mapper.map(entities.getContent(),
				new TypeToken<List<orderDTO>>() {}.getType());
		
		Page<orderDTO> dtoPage = new PageImpl<>(dto, pageable, entities.getTotalElements());
		
		return new ResponseEntity<Page<orderDTO>>(dtoPage, HttpStatus.OK);
		
	}
	
}
