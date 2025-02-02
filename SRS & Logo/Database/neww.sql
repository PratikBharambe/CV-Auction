CREATE TABLE Event (
    eventid INT AUTO_INCREMENT PRIMARY KEY, 
    eventname VARCHAR(100) NOT NULL, 
    vehicletype VARCHAR(50) NOT NULL, 
    startdatetime DATETIME NOT NULL, 
    enddatetime DATETIME NOT NULL, 
    location VARCHAR(150) NOT NULL, 
    base_price DECIMAL(10,2) NOT NULL,  
    noofvehicles INT NOT NULL DEFAULT 0 
);

CREATE TABLE Admin (
    aid INT AUTO_INCREMENT PRIMARY KEY,
    aname VARCHAR(100) NOT NULL,
    apwd VARCHAR(255) NOT NULL,
    aemail VARCHAR(150) NOT NULL UNIQUE,
    role VARCHAR(20) NOT NULL DEFAULT 'admin'
);

CREATE TABLE Users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    ufullname VARCHAR(100) NOT NULL,
    uname VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('Admin', 'Customer', 'Seller')),
    upwd VARCHAR(255) NOT NULL,
    uemail VARCHAR(150) NOT NULL UNIQUE,
    mob_no VARCHAR(15) NOT NULL,
    pan_card CHAR(10) NOT NULL,
    address VARCHAR(255),
    bank_acc_no VARCHAR(20),
    access_status VARCHAR(10) DEFAULT 'Active' CHECK (access_status IN ('Active', 'Inactive'))
);

CREATE TABLE All_Vehicles_Details (
    vehicleid INT AUTO_INCREMENT PRIMARY KEY, 
    reg_no VARCHAR(20) NOT NULL UNIQUE,           
    reg_year INT NOT NULL,                     
    manufac_name VARCHAR(50) NOT NULL,           
    model_name VARCHAR(50) NOT NULL,           
    fuel_type VARCHAR(10) CHECK (fuel_type IN ('Petrol', 'Diesel', 'CNG')),  
    insurance VARCHAR(50),                     
    km_driven INT,                              
    RTO_passing VARCHAR(50),                   
    year_of_manufacturing INT NOT NULL,        
    parking_location VARCHAR(50),
    eventid INT,  
    FOREIGN KEY (eventid) REFERENCES Event(eventid) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE Host_Auction (
    auctionid INT AUTO_INCREMENT PRIMARY KEY,
    eventid INT, 
    vehicleid INT,
    base_price DECIMAL(10,2) NOT NULL, 
    auction_start DATETIME NOT NULL,
    auction_end DATETIME NOT NULL,
    FOREIGN KEY (eventid) REFERENCES Event(eventid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (vehicleid) REFERENCES All_Vehicles_Details(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Current_Auction (
    vehicleid INT, 
    auctionid INT,
    eventid INT,
    base_price DECIMAL(10,2) NOT NULL,
    highest_bid DECIMAL(10,2), 
    auction_start DATETIME NOT NULL, 
    auction_end DATETIME NOT NULL,
    PRIMARY KEY (vehicleid, auctionid), 
    FOREIGN KEY (vehicleid) REFERENCES All_Vehicles_Details(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (eventid) REFERENCES Event(eventid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (auctionid) REFERENCES Host_Auction(auctionid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Deposit_Payment (
    payment_no INT AUTO_INCREMENT PRIMARY KEY, 
    uid INT, 
    amt DECIMAL(10, 2) NOT NULL, 
    utr_no VARCHAR(50) NOT NULL UNIQUE,
    FOREIGN KEY (uid) REFERENCES Users(uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Allowed_User (
    uid INT PRIMARY KEY,                       
    payment_no INT,                           
    bid_access_left INT NOT NULL,  
    FOREIGN KEY (payment_no) REFERENCES Deposit_Payment(payment_no) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (uid) REFERENCES Users(uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Auction_Status_Track (
    allowed_user_uid INT,  
    user_bid_left INT NOT NULL, 
    price_offered DECIMAL(10,2) NOT NULL, 
    highest_bidder BIT DEFAULT 0, 
    auction_end BIT DEFAULT 0, 
    vehicleid INT,
    PRIMARY KEY (allowed_user_uid, vehicleid),
    FOREIGN KEY (allowed_user_uid) REFERENCES Allowed_User(uid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (vehicleid) REFERENCES Current_Auction(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Payment_Transaction (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY, 
    uid INT, 
    transaction_date DATE NOT NULL,               
    amt DECIMAL(10, 2) NOT NULL,                  
    utr_no VARCHAR(50) NOT NULL UNIQUE,
    FOREIGN KEY (uid) REFERENCES Users(uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Approvals (
    approval_id INT AUTO_INCREMENT PRIMARY KEY,          
    vehicleid INT,                                      
    eventid INT,                                        
    auctionid INT,                                      
    vehiclename VARCHAR(100) NOT NULL,                   
    bidamt DECIMAL(10,2) NOT NULL,                       
    approval_status VARCHAR(20) DEFAULT 'Pending',       
    approval_date DATETIME DEFAULT CURRENT_TIMESTAMP,            
    FOREIGN KEY (vehicleid) REFERENCES All_Vehicles_Details(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (eventid) REFERENCES Event(eventid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (auctionid) REFERENCES Host_Auction(auctionid) ON DELETE CASCADE ON UPDATE CASCADE
);
