package BE.Service;

import java.util.Optional;

import BE.Entity.RefreshToken;

public interface IRefreshTokenService {
	public RefreshToken createRefreshToken(String username);
	
	public Optional<RefreshToken> findByToken(String token);
	
	public RefreshToken verifyExpiration(RefreshToken token);
}
