package com.cv_auction.Cv_Auction.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicalDetails {
    @Id
    private int detailsId;
    private String vehicleNo;
    private String carBrand;
    private String state;
    private String registrationYear;
    private String model;
    private String fuel;
    private String insurance;
    private int kmDriven;
    private String rtoPassing;
    private String ownership;
    private int engineDisplacement;
    private int yearOfManufacture;
    private double price;
    private int ownerId;
}
