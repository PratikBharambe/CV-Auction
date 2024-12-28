package com.cv_auction.Cv_Auction.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int uid;
    private String uname;
    private String userRole;
    private String upwd;
    private String uemail;
    private String mobNo;
    private String panCard;
    private String address;
    private String bankCccNo;
    private boolean accessStatus;
}
