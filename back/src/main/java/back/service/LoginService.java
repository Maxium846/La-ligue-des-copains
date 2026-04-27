package back.service;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import back.repository.UtilisateurRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private static final Logger logger = LogManager.getLogger(LoginService.class);
    private final UtilisateurRepository utilisateurRepository;

    public LoginService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    public Utilisateur login(String identifiant, String password) throws BusinessException {
        try {
            back.model.Utilisateur user = utilisateurRepository.findUtilisateurByIdentifiant(identifiant);
            if (user == null) {
                throw new BusinessException("L'utilisateur n'existe pas");
            } else if (!user.getPassword().equals(password)) {
                throw new BusinessException("Vous aviez saisi un mauvais mot de passe");
            }
            return new Utilisateur(user.getId(), user.getIdentifiant(), user.getPassword(), user.getAdresseMail());
        } catch (Exception e) {
            logger.error(e);
            throw new BusinessException("Une erreur a eu lieu");
        }
    }
}
