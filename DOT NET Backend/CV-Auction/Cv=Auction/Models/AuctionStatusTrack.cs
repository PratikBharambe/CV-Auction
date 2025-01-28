using System;
using System.Collections.Generic;

namespace Cv_Auction.Models
{
    public partial class AuctionStatusTrack
    {
        public int? AllowedUserUid { get; set; }
        public int UserBidLeft { get; set; }
        public decimal PriceOffered { get; set; }
        public bool? HighestBidder { get; set; }
        public bool? AuctionEnd { get; set; }
        public int? Vehicleid { get; set; }

        public virtual AllowedUser? AllowedUserU { get; set; }
        public virtual CurrentAuction? Vehicle { get; set; }
    }
}
