package com.CV_Auction.daos;

import com.CV_Auction.beans.DepositPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepositRepo extends JpaRepository<DepositPayment,Integer> {
}
