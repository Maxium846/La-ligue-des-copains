package back.controller;

import back.entity.Personne;
import back.entity.User;
import back.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api_ligue_des_copains")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService registerService) {
        this.loginService = registerService;
    }

    @PostMapping("/login")
    public Personne Register(@RequestBody User user){

      return   loginService.register(user.getAdresseMail(),user.getPassword());

}

}
