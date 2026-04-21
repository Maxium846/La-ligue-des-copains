package back.controller;

import back.entity.Utilisateur;
import back.service.LoginService;
import jdk.jshell.execution.Util;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api_ligue_des_copains")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService registerService) {
        this.loginService = registerService;
    }

    @PostMapping("/login")
    public Utilisateur login(@RequestBody Utilisateur user){

      return   loginService.login(user.adresseMail(), user.password());

}

}
