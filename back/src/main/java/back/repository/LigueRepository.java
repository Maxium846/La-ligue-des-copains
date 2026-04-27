package back.repository;

import back.model.Ligue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LigueRepository extends JpaRepository<Ligue, Integer> {

}