package back.controller;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import back.service.UtilisateurService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api_ligue_des_copains")
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @PostMapping("/user")
    public ResponseEntity<?> getUtilisateur(@RequestBody Utilisateur user) {

        try{
            return  ResponseEntity.ok().body(utilisateurService.saveUtilisateur(user));
        } catch (BusinessException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message",e.message));
        }
    }
}
