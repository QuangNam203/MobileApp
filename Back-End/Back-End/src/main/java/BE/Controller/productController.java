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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BE.DTO.onceProductDTO;
import BE.DTO.productDTO;
import BE.Entity.product;
import BE.Service.IProductService;

@RestController
@RequestMapping(value = "api/v1/product")
@CrossOrigin("*")
public class productController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IProductService productService;
	
	@GetMapping
	private ResponseEntity<?> getAll(Pageable pageable){
		
		Page<product> entities = productService.getAll(pageable);
		
		List<productDTO> dto = mapper.map(entities.getContent(), 
				new TypeToken<List<productDTO>>() {}.getType());
		
		Page<productDTO> dtoPage = new PageImpl<>(dto, pageable, entities.getTotalElements());
		
		return new ResponseEntity<Page<productDTO>>(dtoPage,HttpStatus.OK);
	}
	
	@GetMapping("/productId/{id}")
	private ResponseEntity<?> getProductByID(@PathVariable("id") int id){
		product entity = productService.getById(id);
		
		onceProductDTO dto = mapper.map(entity, onceProductDTO.class);
		
		return new ResponseEntity<onceProductDTO>(dto, HttpStatus.OK);
	}
	
	@GetMapping("/productType/{name}")
	private ResponseEntity<?> getAllProductType(
			@PathVariable("name")String name,
			Pageable pageable){
		Page<product> entities = productService.getAllTypeProduct(name,pageable);
		
		List<productDTO> dto = mapper.map(entities.getContent(),
				new TypeToken<List<productDTO>>() {}.getType());
		
		Page<productDTO> dtoPage = new PageImpl<>(dto, pageable, entities.getTotalElements());
		
		return new ResponseEntity<Page<productDTO>>(dtoPage,HttpStatus.OK);
	}
	
	@GetMapping("/productType/{name}/{sort}")
	private ResponseEntity<?> getAllOD(
			@PathVariable("name")String name,
			@PathVariable("sort")String sort,
			Pageable pageable){
		Page<product> entities = productService.getAllOD(name, sort, pageable);
		
		List<productDTO> dto = mapper.map(entities.getContent(),
				new TypeToken<List<productDTO>>() {}.getType());
		
		Page<productDTO> dtoPage = new PageImpl<>(dto, pageable, entities.getTotalElements());
		
		return new ResponseEntity<Page<productDTO>>(dtoPage,HttpStatus.OK);
	}
	
}
