package BE.Service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import BE.Entity.order;
import BE.Form.createOrderForm;

public interface IOrderService {
	
	public Page<order> getAll(Pageable pageable);
	
	public void createOrder(createOrderForm form);
	
}
