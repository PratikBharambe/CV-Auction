using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class AuctionStatusTrack
{
    public int AllowedUserUid { get; set; }

    public int UserBidLeft { get; set; }

    public decimal PriceOffered { get; set; }

    public bool? HighestBidder { get; set; }

    public bool? AuctionEnd { get; set; }

    public int Vehicleid { get; set; }

    public int Auctionid { get; set; }

    //public virtual AllowedUser AllowedUserU { get; set; } = null!;

    //public virtual CurrentAuction CurrentAuction { get; set; } = null!;
}
