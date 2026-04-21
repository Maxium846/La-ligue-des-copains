package back.service;

import back.entity.Utilisateur;
import org.springframework.stereotype.Service;

@Service
public class LoginService {


    public Utilisateur login(String adresseMail, String password) {

        String admin = "admin";

        Utilisateur utilisateur = new Utilisateur(1, "d", null, null);
        if (admin.equals(password) && admin.equals(adresseMail)) {
            return utilisateur;
        } else {

            throw new RuntimeException("Le mot de passe ou l'email est incorrect");
        }

    }
}
