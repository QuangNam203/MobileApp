package BE.Entity;

public enum userRole {
	ADMIN("ADMIN"), USER("USER");
	
	private String value;
	
	private userRole(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}
	
	public static userRole toEnum(String sqlValue) {
		for (userRole type : userRole.values()) {
			if(type.getValue().equals(sqlValue)) {
				return type;
			}
		}
		return null;
	}
}
