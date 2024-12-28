using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CV_Auction.Models
{
    public partial class TestAuctionContext : DbContext
    {
        public TestAuctionContext()
        {
        }

        public TestAuctionContext(DbContextOptions<TestAuctionContext> options)
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;Initial Catalog=TestAuction;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Aid)
                    .HasName("PK__Admin__DE508E2E0D1858D6");

                entity.ToTable("Admin");

                entity.HasIndex(e => e.Aemail, "UQ__Admin__A0B4BEC3F228326B")
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
                entity.HasKey(e => new { e.PaymentNo, e.Uid })
                    .HasName("PK__allowed___B0C8E02F474D571A");

                entity.ToTable("allowed_user");

                entity.Property(e => e.PaymentNo).HasColumnName("payment_no");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.BidAccessLeft).HasColumnName("bid_access_left");

                entity.HasOne(d => d.PaymentNoNavigation)
                    .WithMany(p => p.AllowedUsers)
                    .HasForeignKey(d => d.PaymentNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__allowed_u__payme__6442E2C9");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.AllowedUsers)
                    .HasForeignKey(d => d.Uid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__allowed_use__uid__65370702");
            });

            modelBuilder.Entity<AuctionList>(entity =>
            {
                entity.HasKey(e => e.Eventid)
                    .HasName("PK__Auction___2DC8B1114FD3B49B");

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

                entity.HasOne(d => d.AidNavigation)
                    .WithMany(p => p.AuctionLists)
                    .HasForeignKey(d => d.Aid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Auction_Lis__aid__59C55456");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.AuctionLists)
                    .HasForeignKey(d => d.Vehicleid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Auction_L__vehic__5AB9788F");
            });

            modelBuilder.Entity<AuctionStatusTrack>(entity =>
            {
                entity.HasKey(e => new { e.AllowedUserPaymentNo, e.AllowedUserUid, e.Vehicleid })
                    .HasName("PK__Auction___522F22AB41D2B850");

                entity.ToTable("Auction_Status_Track");

                entity.Property(e => e.AllowedUserPaymentNo).HasColumnName("allowed_user_payment_no");

                entity.Property(e => e.AllowedUserUid).HasColumnName("allowed_user_uid");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

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

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.AuctionStatusTracks)
                    .HasForeignKey(d => d.Vehicleid)
                    .HasConstraintName("FK__Auction_S__vehic__70A8B9AE");

                entity.HasOne(d => d.AllowedUser)
                    .WithMany(p => p.AuctionStatusTracks)
                    .HasForeignKey(d => new { d.AllowedUserPaymentNo, d.AllowedUserUid })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Auction_Status_T__6FB49575");
            });

            modelBuilder.Entity<CurrentAuction>(entity =>
            {
                entity.HasKey(e => e.Vehicleid)
                    .HasName("PK__Current___5BE2516AF81E120B");

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

                entity.HasOne(d => d.AidNavigation)
                    .WithMany(p => p.CurrentAuctions)
                    .HasForeignKey(d => d.Aid)
                    .HasConstraintName("FK__Current_Auc__aid__6AEFE058");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.CurrentAuctions)
                    .HasForeignKey(d => d.Eventid)
                    .HasConstraintName("FK__Current_A__event__69FBBC1F");
            });

            modelBuilder.Entity<DepositPayment>(entity =>
            {
                entity.HasKey(e => e.PaymentNo)
                    .HasName("PK__Deposit___ED1FE10977A16747");

                entity.ToTable("Deposit_Payment");

                entity.Property(e => e.PaymentNo).HasColumnName("payment_no");

                entity.Property(e => e.Amt)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amt");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.UtrNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("utr_no");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.DepositPayments)
                    .HasForeignKey(d => d.Uid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Deposit_Pay__uid__6166761E");
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
                    .HasName("PK__Payment___85C600AFD978E7D3");

                entity.ToTable("Payment_transaction");

                entity.HasIndex(e => e.UtrNo, "UQ__Payment___66060903DD58B830")
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

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.PaymentTransactions)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FK__Payment_tra__uid__5E8A0973");
            });

            modelBuilder.Entity<TotalVehicle>(entity =>
            {
                entity.HasKey(e => e.Vehicleid)
                    .HasName("PK__Total_Ve__5BE2516A29C9F2DB");

                entity.ToTable("Total_Vehicles");

                entity.Property(e => e.Vehicleid).HasColumnName("vehicleid");

                entity.Property(e => e.DetailsId).HasColumnName("details_id");

                entity.Property(e => e.Imgid).HasColumnName("imgid");

                entity.HasOne(d => d.Details)
                    .WithMany(p => p.TotalVehicles)
                    .HasForeignKey(d => d.DetailsId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Total_Veh__detai__56E8E7AB");

                entity.HasOne(d => d.Img)
                    .WithMany(p => p.TotalVehicles)
                    .HasForeignKey(d => d.Imgid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Total_Veh__imgid__55F4C372");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PK__User__DD70126475B30A09");

                entity.ToTable("User");

                entity.HasIndex(e => e.Uemail, "UQ__User__D92E5BC08058249E")
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
                    .HasName("PK__vehicle___C3E443F4CE8292B5");

                entity.ToTable("vehicle_details");

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
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
