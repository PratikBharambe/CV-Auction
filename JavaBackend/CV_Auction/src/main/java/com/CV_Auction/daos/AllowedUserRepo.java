package com.CV_Auction.daos;

import com.CV_Auction.beans.AllowedUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllowedUserRepo extends JpaRepository<AllowedUser,Integer> {
}
