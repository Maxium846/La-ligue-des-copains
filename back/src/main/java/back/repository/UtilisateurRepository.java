package back.repository;

import back.model.Utilisateur;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends CrudRepository<Utilisateur, Integer> {
    Utilisateur findUtilisateurByIdentifiant(String identifiant);
}