using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class User
    {
        //public User()
        //{
        //    DepositPayments = new HashSet<DepositPayment>();
        //    PaymentTransactions = new HashSet<PaymentTransaction>();
        //    VehicleDetails = new HashSet<VehicleDetail>();
        //}

        public int Uid { get; set; }
        public string Ufullname { get; set; } = null!;
        public string Uname { get; set; } = null!;
        public string UserRole { get; set; } = null!;
        public string Upwd { get; set; } = null!;
        public string Uemail { get; set; } = null!;
        public string MobNo { get; set; } = null!;
        public string PanCard { get; set; } = null!;
        public string? Address { get; set; }
        public string? BankAccNo { get; set; }
        public string? AccessStatus { get; set; }

        //public virtual AllowedUser? AllowedUser { get; set; }
        //public virtual ICollection<DepositPayment> DepositPayments { get; set; }
        //public virtual ICollection<PaymentTransaction> PaymentTransactions { get; set; }
        //public virtual ICollection<VehicleDetail> VehicleDetails { get; set; }
    }
}
