package com.cv_auction.Cv_Auction.mapper;

import com.cv_auction.Cv_Auction.beans.User;
import com.cv_auction.Cv_Auction.dto.UserDto;

public class UserMapper {

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getUid(),
                userDto.getUname(),
                userDto.getUserRole(),
                userDto.getUpwd(),
                userDto.getUemail(),
                userDto.getMobNo(),
                userDto.getPanCard(),
                userDto.getAddress(),
                userDto.getBankCccNo(),
                userDto.isAccessStatus());
    }

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUid(),
                user.getUname(),
                user.getUserRole(),
                user.getUpwd(),
                user.getUemail(),
                user.getMobNo(),
                user.getPanCard(),
                user.getAddress(),
                user.getBankCccNo(),
                user.isAccessStatus());
    }

}
