using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class PaymentTransaction
{
    public int TransactionId { get; set; }

    public int? Uid { get; set; }

    public DateOnly TransactionDate { get; set; }

    public decimal Amt { get; set; }

    public string UtrNo { get; set; } = null!;

    //public virtual User? UidNavigation { get; set; }
}
