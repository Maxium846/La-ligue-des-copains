package back.controller;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import back.service.CreateUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api_ligue_des_copains")
@RequiredArgsConstructor
public class CreateUserController {

    private final CreateUserService createUserService;

    @PostMapping("/createUser")
    public ResponseEntity<?> createUser(@RequestBody Utilisateur user) {
        try {
            return ResponseEntity.ok().body(createUserService.createUser(user.adresseMail(), user.identifiant(), user.password()));
        } catch (BusinessException be) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", be.message));
        }
    }
}
