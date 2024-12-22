<<<<<<< HEAD:Back-end/Cv-Auction/src/main/java/com/cv_auction/Cv_Auction/beans/VehicleDetails.java
package com.cv_auction.Cv_Auction.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
=======
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
>>>>>>> 93b57c5a82144ced9925ba58e095c452e9b25081:Back-end/Cv-Auction/src/main/java/com/cv_auction/Cv_Auction/beans/VehicalDetails.java
