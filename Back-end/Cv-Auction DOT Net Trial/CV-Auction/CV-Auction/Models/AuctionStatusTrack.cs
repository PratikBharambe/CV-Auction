using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class AuctionStatusTrack
    {
        public int AllowedUserPaymentNo { get; set; }
        public int AllowedUserUid { get; set; }
        public int UserBidLeft { get; set; }
        public decimal PriceOffered { get; set; }
        public bool? HighestBidder { get; set; }
        public bool? AuctionEnd { get; set; }
        public int Vehicleid { get; set; }

        public virtual AllowedUser AllowedUser { get; set; } = null!;
        public virtual CurrentAuction Vehicle { get; set; } = null!;
    }
}
