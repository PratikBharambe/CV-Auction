using System;
using System.Collections.Generic;

namespace Cv_Auction.Models
{
    public partial class AllowedUser
    {
        public int? PaymentNo { get; set; }
        public int Uid { get; set; }
        public int BidAccessLeft { get; set; }

        public virtual DepositPayment? PaymentNoNavigation { get; set; }
        public virtual User UidNavigation { get; set; } = null!;
    }
}
