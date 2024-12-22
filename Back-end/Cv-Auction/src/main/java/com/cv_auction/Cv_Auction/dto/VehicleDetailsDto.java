package com.cv_auction.Cv_Auction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDetailsDto {
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
