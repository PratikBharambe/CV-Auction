package com.cv_auction.Cv_Auction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto {
    private int aid;
    private String aname;
    private String apwd;
    private String aemail;
}
