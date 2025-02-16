package com.CV_Auction.daos;

import com.CV_Auction.beans.AuctionStatusTrack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionStatusTrackRepo extends JpaRepository<AuctionStatusTrack,Integer> {
}
