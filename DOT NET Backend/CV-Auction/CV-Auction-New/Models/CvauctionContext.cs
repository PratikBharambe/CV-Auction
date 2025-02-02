using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CV_Auction_New.Models;

public partial class CvauctionContext : DbContext
{
    public CvauctionContext()
    {
    }

    public CvauctionContext(DbContextOptions<CvauctionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<AllVehiclesDetail> AllVehiclesDetails { get; set; }

    public virtual DbSet<AllowedUser> AllowedUsers { get; set; }

    public virtual DbSet<Approval> Approvals { get; set; }

    public virtual DbSet<AuctionStatusTrack> AuctionStatusTracks { get; set; }

    public virtual DbSet<CurrentAuction> CurrentAuctions { get; set; }

    public virtual DbSet<DepositPayment> DepositPayments { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<HostAuction> HostAuctions { get; set; }

    public virtual DbSet<PaymentTransaction> PaymentTransactions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.Aid).HasName("PK__Admin__DE508E2E6ED7C385");

            entity.ToTable("Admin");

            entity.HasIndex(e => e.Aemail, "UQ__Admin__A0B4BEC3D485CFFA").IsUnique();

            entity.Property(e => e.Aid).HasColumnName("aid");
            entity.Property(e => e.Aemail)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("aemail");
            entity.Property(e => e.Aname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("aname");
            entity.Property(e => e.Apwd)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("apwd");
            entity.Property(e => e.Role)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("admin")
                .HasColumnName("role");
        });

        modelBuilder.Entity<AllVehiclesDetail>(entity =>
        {
            entity.HasKey(e => e.Vehicleid).HasName("PK__All_Vehi__5BE2516A63F9DA58");

            entity.ToTable("All_Vehicles_Details");

            entity.HasIndex(e => e.RegNo, "UQ__All_Vehi__74039E9C3CED16AB").IsUnique();

            entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");
            entity.Property(e => e.Eventid).HasColumnName("eventid");
            entity.Property(e => e.FuelType)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("fuel_type");
            entity.Property(e => e.Insurance)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("insurance");
            entity.Property(e => e.KmDriven).HasColumnName("km_driven");
            entity.Property(e => e.ManufacName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("manufac_name");
            entity.Property(e => e.ModelName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("model_name");
            entity.Property(e => e.ParkingLocation)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("parking_location");
            entity.Property(e => e.RegNo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("reg_no");
            entity.Property(e => e.RegYear).HasColumnName("reg_year");
            entity.Property(e => e.RtoPassing)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("RTO_passing");
            entity.Property(e => e.YearOfManufacturing).HasColumnName("year_of_manufacturing");

            //entity.HasOne(d => d.Event).WithMany(p => p.AllVehiclesDetails)
            //    .HasForeignKey(d => d.Eventid)
            //    .OnDelete(DeleteBehavior.SetNull)
            //    .HasConstraintName("FK__All_Vehic__event__32E0915F");
        });

        modelBuilder.Entity<AllowedUser>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PK__Allowed___DD701264DC161D5D");

            entity.ToTable("Allowed_User");

            entity.Property(e => e.Uid)
                .ValueGeneratedNever()
                .HasColumnName("uid");
            entity.Property(e => e.BidAccessLeft).HasColumnName("bid_access_left");
            entity.Property(e => e.PaymentNo).HasColumnName("payment_no");

            //entity.HasOne(d => d.PaymentNoNavigation).WithMany(p => p.AllowedUsers)
            //    .HasForeignKey(d => d.PaymentNo)
            //    .OnDelete(DeleteBehavior.Cascade)
            //    .HasConstraintName("FK__Allowed_U__payme__4222D4EF");

            //entity.HasOne(d => d.UidNavigation).WithOne(p => p.AllowedUser)
            //    .HasForeignKey<AllowedUser>(d => d.Uid)
            //    .OnDelete(DeleteBehavior.ClientSetNull)
            //    .HasConstraintName("FK__Allowed_Use__uid__4316F928");
        });

        modelBuilder.Entity<Approval>(entity =>
        {
            entity.HasKey(e => e.ApprovalId).HasName("PK__Approval__C94AE61A2BE9ADC1");

            entity.Property(e => e.ApprovalId).HasColumnName("approval_id");
            //entity.Property(e => e.ApprovalDate)
            //    .HasDefaultValueSql("(getdate())")
            //    .HasColumnType("datetime")
            //    .HasColumnName("approval_date");
            entity.Property(e => e.ApprovalStatus)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("Pending")
                .HasColumnName("approval_status");
            entity.Property(e => e.Auctionid).HasColumnName("auctionid");
            entity.Property(e => e.Bidamt)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("bidamt");
            entity.Property(e => e.Eventid).HasColumnName("eventid");
            entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");
            entity.Property(e => e.Vehiclename)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("vehiclename");

            //entity.HasOne(d => d.Auction).WithMany(p => p.Approvals)
            //    .HasForeignKey(d => d.Auctionid)
            //    .HasConstraintName("FK__Approvals__aucti__628FA481");

            //entity.HasOne(d => d.Event).WithMany(p => p.Approvals)
            //    .HasForeignKey(d => d.Eventid)
            //    .HasConstraintName("FK__Approvals__event__619B8048");

            //entity.HasOne(d => d.Vehicle).WithMany(p => p.Approvals)
            //    .HasForeignKey(d => d.Vehicleid)
            //    .OnDelete(DeleteBehavior.Cascade)
            //    .HasConstraintName("FK__Approvals__vehic__60A75C0F");
        });

        modelBuilder.Entity<AuctionStatusTrack>(entity =>
        {
            entity.HasKey(e => new { e.AllowedUserUid, e.Vehicleid, e.Auctionid }).HasName("PK__Auction___5C8DF1B7CAF7A5B3");

            entity.ToTable("Auction_Status_Track");

            entity.Property(e => e.AllowedUserUid).HasColumnName("allowed_user_uid");
            entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");
            entity.Property(e => e.Auctionid).HasColumnName("auctionid");
            entity.Property(e => e.AuctionEnd)
                .HasDefaultValue(false)
                .HasColumnName("auction_end");
            entity.Property(e => e.HighestBidder)
                .HasDefaultValue(false)
                .HasColumnName("highest_bidder");
            entity.Property(e => e.PriceOffered)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price_offered");
            entity.Property(e => e.UserBidLeft).HasColumnName("user_bid_left");

            //entity.HasOne(d => d.AllowedUserU).WithMany(p => p.AuctionStatusTracks)
            //    .HasForeignKey(d => d.AllowedUserUid)
            //    .HasConstraintName("FK__Auction_S__allow__47DBAE45");

            //entity.HasOne(d => d.CurrentAuction).WithMany(p => p.AuctionStatusTracks)
            //    .HasForeignKey(d => new { d.Vehicleid, d.Auctionid })
            //    .HasConstraintName("FK__Auction_Status_T__48CFD27E");
        });

        modelBuilder.Entity<CurrentAuction>(entity =>
        {
            entity.HasKey(e => new { e.Vehicleid, e.Auctionid }).HasName("PK__Current___2DA959EA67BA967B");

            entity.ToTable("Current_Auction");

            entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");
            entity.Property(e => e.Auctionid).HasColumnName("auctionid");
            entity.Property(e => e.AuctionEnd)
                .HasColumnType("datetime")
                .HasColumnName("auction_end");
            entity.Property(e => e.AuctionStart)
                .HasColumnType("datetime")
                .HasColumnName("auction_start");
            entity.Property(e => e.BasePrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("base_price");
            entity.Property(e => e.Eventid).HasColumnName("eventid");
            entity.Property(e => e.HighestBid)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("highest_bid");

            //entity.HasOne(d => d.Auction).WithMany(p => p.CurrentAuctions)
            //    .HasForeignKey(d => d.Auctionid)
            //    .OnDelete(DeleteBehavior.ClientSetNull)
            //    .HasConstraintName("FK__Current_A__aucti__3B75D760");

            //entity.HasOne(d => d.Event).WithMany(p => p.CurrentAuctions)
            //    .HasForeignKey(d => d.Eventid)
            //    .HasConstraintName("FK__Current_A__event__3A81B327");

            //entity.HasOne(d => d.Vehicle).WithMany(p => p.CurrentAuctions)
            //    .HasForeignKey(d => d.Vehicleid)
            //    .OnDelete(DeleteBehavior.ClientSetNull)
            //    .HasConstraintName("FK__Current_A__vehic__398D8EEE");
        });

        modelBuilder.Entity<DepositPayment>(entity =>
        {
            entity.HasKey(e => e.PaymentNo).HasName("PK__Deposit___ED1FE109B65B0F2B");

            entity.ToTable("Deposit_Payment");

            entity.HasIndex(e => e.UtrNo, "UQ__Deposit___66060903B838DEE6").IsUnique();

            entity.Property(e => e.PaymentNo).HasColumnName("payment_no");
            entity.Property(e => e.Amt)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("amt");
            entity.Property(e => e.Uid).HasColumnName("uid");
            entity.Property(e => e.UtrNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("utr_no");

            //entity.HasOne(d => d.UidNavigation).WithMany(p => p.DepositPayments)
            //    .HasForeignKey(d => d.Uid)
            //    .OnDelete(DeleteBehavior.Cascade)
            //    .HasConstraintName("FK__Deposit_Pay__uid__3F466844");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.Eventid).HasName("PK__Event__2DC8B111511F6B7F");

            entity.ToTable("Event");

            entity.Property(e => e.Eventid).HasColumnName("eventid");
            entity.Property(e => e.BasePrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("base_price");
            entity.Property(e => e.Enddatetime)
                .HasColumnType("datetime")
                .HasColumnName("enddatetime");
            entity.Property(e => e.Eventname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("eventname");
            entity.Property(e => e.Location)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.Noofvehicles).HasColumnName("noofvehicles");
            entity.Property(e => e.Startdatetime)
                .HasColumnType("datetime")
                .HasColumnName("startdatetime");
            entity.Property(e => e.Vehicletype)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("vehicletype");
        });

        modelBuilder.Entity<HostAuction>(entity =>
        {
            entity.HasKey(e => e.Auctionid).HasName("PK__Host_Auc__64B08806F94CD9ED");

            entity.ToTable("Host_Auction");

            entity.Property(e => e.Auctionid).HasColumnName("auctionid");
            entity.Property(e => e.AuctionEnd)
                .HasColumnType("datetime")
                .HasColumnName("auction_end");
            entity.Property(e => e.AuctionStart)
                .HasColumnType("datetime")
                .HasColumnName("auction_start");
            entity.Property(e => e.BasePrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("base_price");
            entity.Property(e => e.Eventid).HasColumnName("eventid");
            entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

            //entity.HasOne(d => d.Event).WithMany(p => p.HostAuctions)
            //    .HasForeignKey(d => d.Eventid)
            //    .HasConstraintName("FK__Host_Auct__event__35BCFE0A");

            //entity.HasOne(d => d.Vehicle).WithMany(p => p.HostAuctions)
            //    .HasForeignKey(d => d.Vehicleid)
            //    .HasConstraintName("FK__Host_Auct__vehic__36B12243");
        });

        modelBuilder.Entity<PaymentTransaction>(entity =>
        {
            entity.HasKey(e => e.TransactionId).HasName("PK__Payment___85C600AFA10E2F50");

            entity.ToTable("Payment_Transaction");

            entity.HasIndex(e => e.UtrNo, "UQ__Payment___66060903A9D83710").IsUnique();

            entity.Property(e => e.TransactionId).HasColumnName("transaction_id");
            entity.Property(e => e.Amt)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("amt");
            entity.Property(e => e.TransactionDate).HasColumnName("transaction_date");
            entity.Property(e => e.Uid).HasColumnName("uid");
            entity.Property(e => e.UtrNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("utr_no");

            //entity.HasOne(d => d.UidNavigation).WithMany(p => p.PaymentTransactions)
            //    .HasForeignKey(d => d.Uid)
            //    .OnDelete(DeleteBehavior.Cascade)
            //    .HasConstraintName("FK__Payment_Tra__uid__4CA06362");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PK__Users__DD70126449EA2E18");

            entity.HasIndex(e => e.Uemail, "UQ__Users__D92E5BC0771247DC").IsUnique();

            entity.Property(e => e.Uid).HasColumnName("uid");
            entity.Property(e => e.AccNo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("acc_no");
            entity.Property(e => e.AccessStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasDefaultValue("Active")
                .HasColumnName("access_status");
            entity.Property(e => e.AccountHolderName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("account_holder_name");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("address");
            entity.Property(e => e.BankAccNo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("bank_acc_no");
            entity.Property(e => e.BankBranch)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("bank_branch");
            entity.Property(e => e.Bankname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("bankname");
            entity.Property(e => e.IfscCode)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("ifsc_code");
            entity.Property(e => e.MobNo)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("mob_no");
            entity.Property(e => e.PanCard)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("pan_card");
            entity.Property(e => e.Role)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("role");
            entity.Property(e => e.Uemail)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("uemail");
            entity.Property(e => e.Ufullname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("ufullname");
            entity.Property(e => e.Uname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("uname");
            entity.Property(e => e.Upwd)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("upwd");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
