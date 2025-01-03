CREATE TABLE [User] (
    uid INT IDENTITY(1,1) PRIMARY KEY,
    uname VARCHAR(100) NOT NULL,
    user_role VARCHAR(50) NOT NULL CHECK (user_role IN ('Admin', 'Customer', 'Seller')),
    upwd VARCHAR(255) NOT NULL,
    uemail VARCHAR(150) NOT NULL UNIQUE,
    mob_no VARCHAR(15) NOT NULL,
    pan_card CHAR(10) NOT NULL,
    address VARCHAR(255),
    bank_acc_no VARCHAR(20) NOT NULL,
    access_status VARCHAR(50) DEFAULT 'Active' CHECK (access_status IN ('Active', 'Inactive'))
);

CREATE TABLE Payment_transaction (
    transaction_id INT IDENTITY(1,1) PRIMARY KEY, 
    uid INT,  -- This will be the foreign key to the User table
    transaction_date DATE NOT NULL,               
    amt DECIMAL(10, 2) NOT NULL,                  
    utr_no VARCHAR(50) NOT NULL UNIQUE,
    FOREIGN KEY (uid) REFERENCES [User](uid)  
);

CREATE TABLE Deposit_Payment (
    uid INT, 
    payment_no INT IDENTITY(1,1) PRIMARY KEY, 
    amt DECIMAL(10, 2) NOT NULL, 
    utr_no VARCHAR(50) NOT NULL, 
    FOREIGN KEY (uid) REFERENCES [User](uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE allowed_user (
    payment_no INT,                       
    uid INT,                           
    bid_access_left INT NOT NULL,  
    FOREIGN KEY (payment_no) REFERENCES Deposit_Payment(payment_no) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (uid) REFERENCES [User](uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Current_Auction (
    vehicleid INT PRIMARY KEY,
    eventid INT,
    aid INT, 
    base_price DECIMAL(10, 2) NOT NULL, 
    auction_start BIT DEFAULT 0,
    auction_end BIT DEFAULT 0, 
    FOREIGN KEY (eventid) REFERENCES Auction_List(eventid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (aid) REFERENCES Admin(aid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Auction_Status_Track (
    allowed_user_uid INT,  
    user_bid_left INT NOT NULL, 
    price_offered DECIMAL(10, 2) NOT NULL, 
    highest_bidder BIT DEFAULT 0, 
    auction_end BIT DEFAULT 0, 
    vehicleid INT,  -- Explicitly declare vehicleid as INT
    FOREIGN KEY (allowed_user_uid) REFERENCES allowed_user(uid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (vehicleid) REFERENCES Current_Auction(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Admin (
    aid INT IDENTITY(1,1) PRIMARY KEY,
    aname VARCHAR(100) NOT NULL,
    apwd VARCHAR(255) NOT NULL,
    aemail VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE Auction_List (
    eventid INT IDENTITY(1,1) PRIMARY KEY,
    eventname VARCHAR(100) NOT NULL,
    vehicletype VARCHAR(50) NOT NULL, 
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    aid INT, 
    vehicleid INT,
    FOREIGN KEY (aid) REFERENCES Admin(aid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (vehicleid) REFERENCES Total_Vehicles(vehicleid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Img (
    imgid INT IDENTITY(1,1) PRIMARY KEY, 
    imgurl VARCHAR(255) NOT NULL 
);

CREATE TABLE vehicle_details (
    details_id INT IDENTITY(1,1) PRIMARY KEY,
    vehicleno VARCHAR(20) NOT NULL,           
    car_brand VARCHAR(50) NOT NULL,            
    state VARCHAR(50) NOT NULL,                
    registration_year INT NOT NULL,          
    model VARCHAR(50) NOT NULL,                
    fuel VARCHAR(30),                          
    insurance VARCHAR(50),                     
    km_driven INT,                             
    RTO_passing VARCHAR(50),                   
    ownership VARCHAR(20),                     
    engine_displacement INT,                   
    year_of_manufacture INT NOT NULL,         
    price DECIMAL(10, 2) NOT NULL,             
    owner_id INT                               
);

CREATE TABLE Total_Vehicles (
    vehicleid INT IDENTITY(1,1) PRIMARY KEY,
    imgid INT, 
    details_id INT,
    FOREIGN KEY (imgid) REFERENCES Img(imgid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (details_id) REFERENCES vehicle_details(details_id) ON DELETE CASCADE ON UPDATE CASCADE
);
