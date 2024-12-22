package com.cv_auction.Cv_Auction.mapper;

import com.cv_auction.Cv_Auction.beans.Admin;
import com.cv_auction.Cv_Auction.dto.AdminDto;

public class AdminMapper {

    public static Admin mapToAdmin(AdminDto adminDto) {
        return new Admin(
                adminDto.getAid(),
                adminDto.getAname(),
                adminDto.getApwd(),
                adminDto.getAemail());
    }

    public static AdminDto mapToAdminDto(Admin admin) {
        return new AdminDto(
                admin.getAid(),
                admin.getAname(),
                admin.getApwd(),
                admin.getAemail());
    }

}