package back.entity;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class User {

    private String adresseMail;
    private String password;

    public User(String adresseMail, String password) {
        this.adresseMail = adresseMail;
        this.password = password;
    }
}
