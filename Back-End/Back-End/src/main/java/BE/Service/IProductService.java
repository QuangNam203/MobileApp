package BE.Service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import BE.Entity.order;
import BE.Entity.product;
import BE.Form.createOrderForm;

public interface IProductService extends UserDetailsService{
	
	public Page<product> getAll(Pageable pageable);
	
	public product getById(int id);
	
	public Page<product> getAllTypeProduct(String name,Pageable pageable);
	
	public Page<product> getAllOD(String name,String Sort,Pageable pageable);
	
}
