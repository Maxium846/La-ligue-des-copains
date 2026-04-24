package back.service;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {

    public Utilisateur createUser(String adresseMail, String identifiant, String password) throws BusinessException {

        String ADMIN = "admin";
        Utilisateur utilisateur = new Utilisateur(1, identifiant, password, adresseMail);
        if (!ADMIN.equals(identifiant)) {
            return utilisateur;
        } else {
            throw new BusinessException("Une erreur a eu lieu lors de la création de votre compte");
        }

    }
}
