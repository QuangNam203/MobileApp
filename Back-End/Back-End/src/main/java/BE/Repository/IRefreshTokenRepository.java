package BE.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import BE.Entity.RefreshToken;

@Repository
public interface IRefreshTokenRepository extends JpaRepository<RefreshToken, Integer>{


}
