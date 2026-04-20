package back.service;

import back.entity.Personne;
import back.entity.User;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class LoginService {


    public Personne register(String adresseMail, String password) {

        User user = new User("admin","admin");
        Personne personne = new Personne(1, "maxime");
        if (Objects.equals(adresseMail, user.getAdresseMail()) && Objects.equals(password, user.getPassword())) {
            return personne;
        } else {

            throw new RuntimeException("Le mot de passe ou l'email est incorrect");
        }

    }
}
