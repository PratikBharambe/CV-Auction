using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CV_Auction099.Models
{
    public partial class AuctionStatusTrack
    {
        public int AllowedUserUid { get; set; }
        public int Vehicleid { get; set; }
        public int Auctionid { get; set; }
        public int UserBidLeft { get; set; }
        public decimal PriceOffered { get; set; }
        public int? HighestBidder { get; set; }
        public bool? AuctionEnd { get; set; }


        //[JsonIgnore]
        //public virtual AllowedUser AllowedUserU { get; set; } = null!;
        
        //[JsonIgnore]
        //public virtual CurrentAuction CurrentAuction { get; set; } = null!;
        
        //[JsonIgnore]
        //public virtual WinnerTable? WinnerTable { get; set; }
    }
}
