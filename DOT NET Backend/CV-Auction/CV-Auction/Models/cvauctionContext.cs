using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CV_Auction.Models
{
    public partial class cvauctionContext : DbContext
    {
        public cvauctionContext()
        {
        }

        public cvauctionContext(DbContextOptions<cvauctionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; } = null!;
        public virtual DbSet<AllowedUser> AllowedUsers { get; set; } = null!;
        public virtual DbSet<AuctionList> AuctionLists { get; set; } = null!;
        public virtual DbSet<AuctionStatusTrack> AuctionStatusTracks { get; set; } = null!;
        public virtual DbSet<CurrentAuction> CurrentAuctions { get; set; } = null!;
        public virtual DbSet<DepositPayment> DepositPayments { get; set; } = null!;
        public virtual DbSet<Img> Imgs { get; set; } = null!;
        public virtual DbSet<PaymentTransaction> PaymentTransactions { get; set; } = null!;
        public virtual DbSet<TotalVehicle> TotalVehicles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<VehicleDetail> VehicleDetails { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Aid)
                    .HasName("PK__Admin__DE508E2E3FB9C0CD");

                entity.ToTable("Admin");

                entity.HasIndex(e => e.Aemail, "UQ__Admin__A0B4BEC35804B84C")
                    .IsUnique();

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
            });

            modelBuilder.Entity<AllowedUser>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PK__Allowed___DD7012645A370ADF");

                entity.ToTable("Allowed_User");

                entity.Property(e => e.Uid)
                    .ValueGeneratedNever()
                    .HasColumnName("uid");

                entity.Property(e => e.BidAccessLeft).HasColumnName("bid_access_left");

                entity.Property(e => e.PaymentNo).HasColumnName("payment_no");

                entity.HasOne(d => d.PaymentNoNavigation)
                    .WithMany(p => p.AllowedUsers)
                    .HasForeignKey(d => d.PaymentNo)
                    .HasConstraintName("FK__Allowed_U__payme__4316F928");

                //entity.HasOne(d => d.UidNavigation)
                //    .WithOne(p => p.AllowedUser)
                //    .HasForeignKey<AllowedUser>(d => d.Uid)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK__Allowed_Use__uid__440B1D61");
            });

            modelBuilder.Entity<AuctionList>(entity =>
            {
                entity.HasKey(e => e.Eventid)
                    .HasName("PK__Auction___2DC8B11131FAD3C9");

                entity.ToTable("Auction_List");

                entity.Property(e => e.Eventid).HasColumnName("eventid");

                entity.Property(e => e.Aid).HasColumnName("aid");

                entity.Property(e => e.Enddate)
                    .HasColumnType("date")
                    .HasColumnName("enddate");

                entity.Property(e => e.Eventname)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("eventname");

                entity.Property(e => e.Location)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.Startdate)
                    .HasColumnType("date")
                    .HasColumnName("startdate");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.Property(e => e.Vehicletype)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("vehicletype");

                //entity.HasOne(d => d.AidNavigation)
                //    .WithMany(p => p.AuctionLists)
                //    .HasForeignKey(d => d.Aid)
                //    .OnDelete(DeleteBehavior.Cascade)
                //    .HasConstraintName("FK__Auction_Lis__aid__35BCFE0A");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.AuctionLists)
                    .HasForeignKey(d => d.Vehicleid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Auction_L__vehic__36B12243");
            });

            modelBuilder.Entity<AuctionStatusTrack>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Auction_Status_Track");

                entity.Property(e => e.AllowedUserUid).HasColumnName("allowed_user_uid");

                entity.Property(e => e.AuctionEnd)
                    .HasColumnName("auction_end")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.HighestBidder)
                    .HasColumnName("highest_bidder")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.PriceOffered)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("price_offered");

                entity.Property(e => e.UserBidLeft).HasColumnName("user_bid_left");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.HasOne(d => d.AllowedUserU)
                    .WithMany()
                    .HasForeignKey(d => d.AllowedUserUid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Auction_S__allow__47DBAE45");

                entity.HasOne(d => d.Vehicle)
                    .WithMany()
                    .HasForeignKey(d => d.Vehicleid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Auction_S__vehic__48CFD27E");
            });

            modelBuilder.Entity<CurrentAuction>(entity =>
            {
                entity.HasKey(e => e.Vehicleid)
                    .HasName("PK__Current___5BE2516A28620336");

                entity.ToTable("Current_Auction");

                entity.Property(e => e.Vehicleid)
                    .ValueGeneratedNever()
                    .HasColumnName("vehicleid");

                entity.Property(e => e.Aid).HasColumnName("aid");

                entity.Property(e => e.AuctionEnd)
                    .HasColumnName("auction_end")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.AuctionStart)
                    .HasColumnName("auction_start")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.BasePrice)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("base_price");

                entity.Property(e => e.Eventid).HasColumnName("eventid");

                //entity.HasOne(d => d.AidNavigation)
                //    .WithMany(p => p.CurrentAuctions)
                //    .HasForeignKey(d => d.Aid)
                //    .HasConstraintName("FK__Current_Auc__aid__3C69FB99");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.CurrentAuctions)
                    .HasForeignKey(d => d.Eventid)
                    .HasConstraintName("FK__Current_A__event__3B75D760");
            });

            modelBuilder.Entity<DepositPayment>(entity =>
            {
                entity.HasKey(e => e.PaymentNo)
                    .HasName("PK__Deposit___ED1FE109136123C5");

                entity.ToTable("Deposit_Payment");

                entity.HasIndex(e => e.UtrNo, "UQ__Deposit___66060903AB097572")
                    .IsUnique();

                entity.Property(e => e.PaymentNo).HasColumnName("payment_no");

                entity.Property(e => e.Amt)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amt");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.UtrNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("utr_no");

                //entity.HasOne(d => d.UidNavigation)
                //    .WithMany(p => p.DepositPayments)
                //    .HasForeignKey(d => d.Uid)
                //    .OnDelete(DeleteBehavior.Cascade)
                //    .HasConstraintName("FK__Deposit_Pay__uid__403A8C7D");
            });

            modelBuilder.Entity<Img>(entity =>
            {
                entity.ToTable("Img");

                entity.Property(e => e.Imgid).HasColumnName("imgid");

                entity.Property(e => e.Imgurl)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("imgurl");
            });

            modelBuilder.Entity<PaymentTransaction>(entity =>
            {
                entity.HasKey(e => e.TransactionId)
                    .HasName("PK__Payment___85C600AF0DEB8426");

                entity.ToTable("Payment_Transaction");

                entity.HasIndex(e => e.UtrNo, "UQ__Payment___66060903CB6A616F")
                    .IsUnique();

                entity.Property(e => e.TransactionId).HasColumnName("transaction_id");

                entity.Property(e => e.Amt)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amt");

                entity.Property(e => e.TransactionDate)
                    .HasColumnType("date")
                    .HasColumnName("transaction_date");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.UtrNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("utr_no");

                //entity.HasOne(d => d.UidNavigation)
                //    .WithMany(p => p.PaymentTransactions)
                //    .HasForeignKey(d => d.Uid)
                //    .OnDelete(DeleteBehavior.Cascade)
                //    .HasConstraintName("FK__Payment_Tra__uid__4CA06362");
            });

            modelBuilder.Entity<TotalVehicle>(entity =>
            {
                entity.HasKey(e => e.Vehicleid)
                    .HasName("PK__Total_Ve__5BE2516ABE1B810F");

                entity.ToTable("Total_Vehicles");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.Property(e => e.DetailsId).HasColumnName("details_id");

                entity.Property(e => e.Imgid).HasColumnName("imgid");

                entity.HasOne(d => d.Details)
                    .WithMany(p => p.TotalVehicles)
                    .HasForeignKey(d => d.DetailsId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Total_Veh__detai__32E0915F");

                entity.HasOne(d => d.Img)
                    .WithMany(p => p.TotalVehicles)
                    .HasForeignKey(d => d.Imgid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Total_Veh__imgid__31EC6D26");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PK__Users__DD7012642D314F29");

                entity.HasIndex(e => e.Uemail, "UQ__Users__D92E5BC0E311A616")
                    .IsUnique();

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.AccessStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("access_status")
                    .HasDefaultValueSql("('Active')");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.BankAccNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("bank_acc_no");

                entity.Property(e => e.MobNo)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("mob_no");

                entity.Property(e => e.PanCard)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("pan_card")
                    .IsFixedLength();

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

                entity.Property(e => e.UserRole)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("user_role");
            });

            modelBuilder.Entity<VehicleDetail>(entity =>
            {
                entity.HasKey(e => e.DetailsId)
                    .HasName("PK__Vehicle___C3E443F4F2F6361A");

                entity.ToTable("Vehicle_Details");

                entity.Property(e => e.DetailsId).HasColumnName("details_id");

                entity.Property(e => e.CarBrand)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("car_brand");

                entity.Property(e => e.EngineDisplacement).HasColumnName("engine_displacement");

                entity.Property(e => e.Fuel)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("fuel");

                entity.Property(e => e.Insurance)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("insurance");

                entity.Property(e => e.KmDriven).HasColumnName("km_driven");

                entity.Property(e => e.Model)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("model");

                entity.Property(e => e.OwnerId).HasColumnName("owner_id");

                entity.Property(e => e.Ownership)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ownership");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("price");

                entity.Property(e => e.RegistrationYear).HasColumnName("registration_year");

                entity.Property(e => e.RtoPassing)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("RTO_passing");

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("state");

                entity.Property(e => e.Vehicleno)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("vehicleno");

                entity.Property(e => e.YearOfManufacture).HasColumnName("year_of_manufacture");

                //entity.HasOne(d => d.Owner)
                //    .WithMany(p => p.VehicleDetails)
                //    .HasForeignKey(d => d.OwnerId)
                //    .OnDelete(DeleteBehavior.Cascade)
                //    .HasConstraintName("FK__Vehicle_D__owner__2F10007B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
