using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class CurrentAuction
    {
        public CurrentAuction()
        {
            AuctionStatusTracks = new HashSet<AuctionStatusTrack>();
        }

        public int Vehicleid { get; set; }
        public int? Eventid { get; set; }
        public int? Aid { get; set; }
        public decimal BasePrice { get; set; }
        public bool? AuctionStart { get; set; }
        public bool? AuctionEnd { get; set; }

        public virtual Admin? AidNavigation { get; set; }
        public virtual AuctionList? Event { get; set; }
        public virtual ICollection<AuctionStatusTrack> AuctionStatusTracks { get; set; }
    }
}
