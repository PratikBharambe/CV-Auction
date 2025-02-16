package com.CV_Auction.daos;

import com.CV_Auction.beans.WinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WinnerTableRepo extends JpaRepository<WinnerTable,Integer> {
}
