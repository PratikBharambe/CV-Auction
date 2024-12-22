package com.cv_auction.Cv_Auction.dao;

import com.cv_auction.Cv_Auction.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDao extends JpaRepository<User, Integer> {

    @Query("select u from User u where u.uemail = :email")
    User getUsersByEmail(String email);
}
