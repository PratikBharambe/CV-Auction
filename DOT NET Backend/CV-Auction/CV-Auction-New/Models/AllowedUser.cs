using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class AllowedUser
{
    public int Uid { get; set; }

    public int? PaymentNo { get; set; }

    public int BidAccessLeft { get; set; }

    public virtual ICollection<AuctionStatusTrack> AuctionStatusTracks { get; set; } = new List<AuctionStatusTrack>();

    //public virtual DepositPayment? PaymentNoNavigation { get; set; }

    //public virtual User UidNavigation { get; set; } = null!;
}
