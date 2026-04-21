package back.controller;

import back.entity.Utilisateur;
import back.entity.exception.BusinessException;
import back.service.LoginService;
import jdk.jshell.execution.Util;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api_ligue_des_copains")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService registerService) {
        this.loginService = registerService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Utilisateur user) {

        try {
            return ResponseEntity.ok().body(loginService.login(user.adresseMail(), user.password()));
        } catch (BusinessException be) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", be.message));
        }
    }
}
