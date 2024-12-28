package com.cv_auction.Cv_Auction.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
    @Id
    private int aid;
    private String aname;
    private String apwd;
    private String aemail;
}