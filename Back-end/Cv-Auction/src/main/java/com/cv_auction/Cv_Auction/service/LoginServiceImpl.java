package com.cv_auction.Cv_Auction.service;

import com.cv_auction.Cv_Auction.beans.User;
import com.cv_auction.Cv_Auction.dao.LoginDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginDao loginDao;

    @Override
    public boolean authenticateUser(String email, String password) {
        User user = loginDao.getUsersByEmail(email);
        System.out.println(user);
        if (user != null) {
            return user.getUpwd().equals(password);
        }
        return false;
    }
}
