using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class DepositPayment
{
    public int PaymentNo { get; set; }

    public int? Uid { get; set; }

    public decimal Amt { get; set; }

    public string UtrNo { get; set; } = null!;

    //public virtual ICollection<AllowedUser> AllowedUsers { get; set; } = new List<AllowedUser>();

    //public virtual User? UidNavigation { get; set; }
}
