package BE.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import BE.Entity.product;

@Repository
public interface IProductRepository extends JpaRepository<product, Integer>, JpaSpecificationExecutor<product>{
	
	@Query(value = "SELECT *  FROM `product` WHERE status = 'F'",nativeQuery = true)
	public Page<product> getAllProduct(Pageable pageable);
	
	
	public Page<product> findByNameContainingAndStatus(String name, String status,Pageable pageable);
	
	
	@Query("SELECT * FROM mobileapp.product as p "
			+ "where p.name LIKE '%:nameParameter% AND status = 'F' "
			+ "order by p.price :sortParameter;")
	public Page<product> findByNameContainingOD(
			@Param("nameParameter")String name, 
			@Param("sortParameter")String sort,Pageable pageable);
	
	public void findByNameContainingAndStatusOrderByPriceAsc();
}
