package BE.Service.Impl;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BE.Entity.RefreshToken;
import BE.Entity.RefreshToken.RefreshTokenBuilder;
import BE.Entity.User;
import BE.Repository.IRefreshTokenRepository;
import BE.Repository.IUserRepository;
import BE.Service.IRefreshTokenService;

@Service
public class RefreshTokenImpl implements IRefreshTokenService{
	
	@Autowired
	private IRefreshTokenRepository refreshTokenRepository;
	
	@Autowired
	private IUserRepository userRepository;
	
	@Override
	public RefreshToken createRefreshToken(String username) {
		
		User user = userRepository.findByUsername(username);
		
		RefreshToken refreshToken = RefreshToken.builder()
				.user(user)
				.token(UUID.randomUUID().toString())
				.expiryDate(new Date(System.currentTimeMillis() + 600000))
				.build();
				
		return refreshTokenRepository.save(refreshToken);
	}

	@Override
	public Optional<RefreshToken> findByToken(String token) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public RefreshToken verifyExpiration(RefreshToken token) {
		// TODO Auto-generated method stub
		return null;
	}

}
