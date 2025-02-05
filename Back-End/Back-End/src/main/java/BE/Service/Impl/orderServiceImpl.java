package BE.Service.Impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import BE.Entity.order;
import BE.Form.createOrderForm;
import BE.Repository.IOrderRepository;
import BE.Service.IOrderService;

@Service
public class orderServiceImpl implements IOrderService{

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IOrderRepository iOrderRepository;
	
	@Override
	public void createOrder(createOrderForm form) {
		iOrderRepository.createOrder(form.getProductId(), form.getUserId());
	}

	@Override
	public Page<order> getAll(Pageable pageable) {
		
		return iOrderRepository.findAll(pageable);
	}

}
