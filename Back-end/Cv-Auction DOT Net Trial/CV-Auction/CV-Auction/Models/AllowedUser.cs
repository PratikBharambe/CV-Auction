using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class AllowedUser
    {
        public AllowedUser()
        {
            AuctionStatusTracks = new HashSet<AuctionStatusTrack>();
        }

        public int PaymentNo { get; set; }
        public int Uid { get; set; }
        public int BidAccessLeft { get; set; }

        public virtual DepositPayment PaymentNoNavigation { get; set; } = null!;
        public virtual User UidNavigation { get; set; } = null!;
        public virtual ICollection<AuctionStatusTrack> AuctionStatusTracks { get; set; }
    }
}
