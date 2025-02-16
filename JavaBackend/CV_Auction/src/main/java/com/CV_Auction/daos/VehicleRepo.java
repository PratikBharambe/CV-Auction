package com.CV_Auction.daos;

import com.CV_Auction.beans.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle,Integer> {
}
