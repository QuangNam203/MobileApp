package BE.Service.Impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import BE.Entity.User;
import BE.Entity.order;
import BE.Entity.product;
import BE.Form.createOrderForm;
import BE.Repository.IProductRepository;
import BE.Repository.IUserRepository;
import BE.Service.IProductService;

@Service
public class productServiceImpl implements IProductService{

	@Autowired
	private IProductRepository productRepository;

	@Autowired
	private IUserRepository iUserRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Page<product> getAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return productRepository.getAllProduct(pageable);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = iUserRepository.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException(username);
		}
		
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				AuthorityUtils.createAuthorityList(user.getRole().toString()));
	}

	@Override
	public product getById(int id) {
		// TODO Auto-generated method stub
		return productRepository.findById(id).get();
	}

	@Override
	public Page<product> getAllTypeProduct(String name,Pageable pageable) {
		// TODO Auto-generated method stub
		return productRepository.findByNameContainingAndStatus(name,"F",pageable);
	}

	@Override
	public Page<product> getAllOD(String name, String Sort, Pageable pageable) {
		// TODO Auto-generated method stub
		return productRepository.findByNameContainingOD(name, Sort, pageable);
	}
	
}
