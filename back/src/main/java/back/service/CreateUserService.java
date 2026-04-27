package back.service;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import back.repository.UtilisateurRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {

    private static final Logger logger = LogManager.getLogger(CreateUserService.class);
    private final UtilisateurRepository utilisateurRepository;

    public CreateUserService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    public Utilisateur createUser(String adresseMail, String identifiant, String password) throws BusinessException {
        back.model.Utilisateur newUtilisateur = new back.model.Utilisateur();
        newUtilisateur.setAdresseMail(adresseMail);
        newUtilisateur.setIdentifiant(identifiant);
        newUtilisateur.setPassword(password);

        try {
            newUtilisateur = utilisateurRepository.save(newUtilisateur);
            logger.info("{} crée, id : {}", newUtilisateur.getIdentifiant(), newUtilisateur.getId());
            return new Utilisateur(newUtilisateur.getId(), identifiant, password, adresseMail);
        } catch (DataIntegrityViolationException e) {
            logger.error(e.getMessage());
            throw new BusinessException(e.getMessage().contains("identifiant_unique") ? "Cet identifiant existe déjà" : "Cette adresse email est déjà prise");
        } catch (Exception e) {
            logger.error(e);
            throw new BusinessException("Une erreur a eu lieu lors de la création du compte");
        }
    }
}
