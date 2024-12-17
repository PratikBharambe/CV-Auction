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
public class User {
    @Id
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
