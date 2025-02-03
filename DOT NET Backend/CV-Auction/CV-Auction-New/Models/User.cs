using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class User
{
    public int Uid { get; set; }

    public string Ufullname { get; set; } = null!;

    public string Uname { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string Upwd { get; set; } = null!;

    public string Uemail { get; set; } = null!;

    public string MobNo { get; set; } = null!;

    public string PanCard { get; set; } = null!;

    public string? Address { get; set; }

    public string? BankAccNo { get; set; }

    public string? Bankname { get; set; }

    public string? BankBranch { get; set; }

    public string? AccountHolderName { get; set; }

    public string? IfscCode { get; set; }

    public string? AccNo { get; set; }

    public string? AccessStatus { get; set; }

    //public virtual AllowedUser? AllowedUser { get; set; }

    //public virtual ICollection<DepositPayment> DepositPayments { get; set; } = new List<DepositPayment>();

    //public virtual ICollection<PaymentTransaction> PaymentTransactions { get; set; } = new List<PaymentTransaction>();
}
