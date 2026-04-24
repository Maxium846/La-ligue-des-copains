package back.service;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {

    public Utilisateur saveUtilisateur(Utilisateur user) throws BusinessException {

        String identifiant = "admin";
        Utilisateur user2 = new Utilisateur(1,"ee",null,null);


        assert user.identifiant() != null;
        if(user.identifiant().equals(identifiant)){

            throw  new BusinessException("Cette identifiant est déja utilisé");
        }else {
            return user2;
        }

    }
}
