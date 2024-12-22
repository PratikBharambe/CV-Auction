package com.cv_auction.Cv_Auction.mapper;

import com.cv_auction.Cv_Auction.dto.VehicleDetailsDto;
import com.cv_auction.Cv_Auction.beans.VehicleDetails;

public class VehicleDetailsMapper {

    public static VehicleDetails mapToVehicalDetails(VehicleDetailsDto vehicleDetailsDto){
        return new VehicleDetails(
                vehicleDetailsDto.getDetailsId(),
                vehicleDetailsDto.getVehicleNo(),
                vehicleDetailsDto.getCarBrand(),
                vehicleDetailsDto.getState(), vehicleDetailsDto.getRegistrationYear(),
                vehicleDetailsDto.getModel(),
                vehicleDetailsDto.getFuel(),
                vehicleDetailsDto.getInsurance(),
                vehicleDetailsDto.getKmDriven(),
                vehicleDetailsDto.getRtoPassing(),
                vehicleDetailsDto.getOwnership(),
                vehicleDetailsDto.getEngineDisplacement(),
                vehicleDetailsDto.getYearOfManufacture(),
                vehicleDetailsDto.getPrice(),
                vehicleDetailsDto.getOwnerId()
        );
    }

    public static VehicleDetailsDto mapToVehicalDetails(VehicleDetails vehicleDetails){
        return new VehicleDetailsDto(
                vehicleDetails.getDetailsId(),
                vehicleDetails.getVehicleNo(),
                vehicleDetails.getCarBrand(),
                vehicleDetails.getState(),
                vehicleDetails.getRegistrationYear(),
                vehicleDetails.getModel(),
                vehicleDetails.getFuel(),
                vehicleDetails.getInsurance(),
                vehicleDetails.getKmDriven(),
                vehicleDetails.getRtoPassing(),
                vehicleDetails.getOwnership(),
                vehicleDetails.getEngineDisplacement(),
                vehicleDetails.getYearOfManufacture(),
                vehicleDetails.getPrice(),
                vehicleDetails.getOwnerId()
        );
    }

}
