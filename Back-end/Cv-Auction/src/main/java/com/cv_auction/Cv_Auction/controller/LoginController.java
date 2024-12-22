package com.cv_auction.Cv_Auction.controller;

import com.cv_auction.Cv_Auction.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping("/authenticate")
    public void checkCredentials(@PathVariable String email, @PathVariable String password) {
        boolean authenticated = loginService.authenticateUser(email, password);
        if (authenticated) {
            System.out.println("Login successful");
        }else{
            System.out.println("Login failed");
        }
    }
}
