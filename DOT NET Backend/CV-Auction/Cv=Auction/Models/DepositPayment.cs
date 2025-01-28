using System;
using System.Collections.Generic;

namespace Cv_Auction.Models
{
    public partial class DepositPayment
    {
        public DepositPayment()
        {
            AllowedUsers = new HashSet<AllowedUser>();
        }

        public int? Uid { get; set; }
        public int PaymentNo { get; set; }
        public decimal Amt { get; set; }
        public string UtrNo { get; set; } = null!;

        public virtual User? UidNavigation { get; set; }
        public virtual ICollection<AllowedUser> AllowedUsers { get; set; }
    }
}
