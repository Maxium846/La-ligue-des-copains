package back.service;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import org.springframework.stereotype.Service;

@Service
public class LoginService {


    public Utilisateur login(String identifiant, String password) throws BusinessException {

        String ADMIN = "admin";

        Utilisateur utilisateur = new Utilisateur(1, "admin", "admin", "admin@test.fr");
        if (ADMIN.equals(password) && ADMIN.equals(identifiant)) {
            return utilisateur;
        } else {
            throw new BusinessException("Le mot de passe ou l'email est incorrect");
        }

    }
}
