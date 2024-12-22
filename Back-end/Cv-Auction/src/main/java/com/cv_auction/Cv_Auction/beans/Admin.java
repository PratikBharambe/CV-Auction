<<<<<<< HEAD
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
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int aid;
    private String aname;
    private String apwd;
    private String aemail;
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
public class Admin {
    @Id
    private int aid;
    private String aname;
    private String apwd;
    private String aemail;
}
>>>>>>> 93b57c5a82144ced9925ba58e095c452e9b25081
