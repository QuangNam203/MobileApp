package BE.Entity;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class convertUserRole implements AttributeConverter<userRole, String>{

	@Override
	public String convertToDatabaseColumn(userRole type) {
		if (type == null) {
			return null;
		}

		return type.getValue();
	}

	@Override
	public userRole convertToEntityAttribute(String sqlValue) {
		if (sqlValue == null) {
			return null;
		}

		return userRole.toEnum(sqlValue);
	}

}
