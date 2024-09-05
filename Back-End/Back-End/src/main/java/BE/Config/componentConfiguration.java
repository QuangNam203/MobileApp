package BE.Config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class componentConfiguration implements WebMvcConfigurer{
	
	@Bean
	public ModelMapper initModelMapper()
	{
		return new ModelMapper();
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry
			.addMapping("/**")
			.allowedOriginPatterns("*")
			.allowedMethods("GET","POST","PUT","DELETE");
	}
}
