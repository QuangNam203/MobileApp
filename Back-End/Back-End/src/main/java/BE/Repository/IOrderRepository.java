package BE.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import BE.Entity.order;

@Repository
public interface IOrderRepository extends JpaRepository<order, Integer>{
	
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO `order`(product_id,user_id) VALUE (?1,?2)",nativeQuery = true)
	public void createOrder(int productId,int userId);
	
}
