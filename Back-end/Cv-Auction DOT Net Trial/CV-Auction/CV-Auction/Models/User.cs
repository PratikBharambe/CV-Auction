using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class User
    {
        public User()
        {
            AllowedUsers = new HashSet<AllowedUser>();
            DepositPayments = new HashSet<DepositPayment>();
            PaymentTransactions = new HashSet<PaymentTransaction>();
        }

        public int Uid { get; set; }
        public string Uname { get; set; } = null!;
        public string UserRole { get; set; } = null!;
        public string Upwd { get; set; } = null!;
        public string Uemail { get; set; } = null!;
        public string MobNo { get; set; } = null!;
        public string PanCard { get; set; } = null!;
        public string? Address { get; set; }
        public string BankAccNo { get; set; } = null!;
        public string? AccessStatus { get; set; }

        public virtual ICollection<AllowedUser> AllowedUsers { get; set; }
        public virtual ICollection<DepositPayment> DepositPayments { get; set; }
        public virtual ICollection<PaymentTransaction> PaymentTransactions { get; set; }
    }
}
