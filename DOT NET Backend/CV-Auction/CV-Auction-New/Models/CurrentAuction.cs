using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class CurrentAuction
{
    public int Vehicleid { get; set; }

    public int Auctionid { get; set; }

    public int? Eventid { get; set; }

    public decimal BasePrice { get; set; }

    public decimal? HighestBid { get; set; }

    public DateTime AuctionStart { get; set; }

    public DateTime AuctionEnd { get; set; }

    //public virtual HostAuction Auction { get; set; } = null!;

    //public virtual ICollection<AuctionStatusTrack> AuctionStatusTracks { get; set; } = new List<AuctionStatusTrack>();

    //public virtual Event? Event { get; set; }

    //public virtual AllVehiclesDetail Vehicle { get; set; } = null!;
}
