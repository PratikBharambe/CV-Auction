using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class HostAuction
{
    public int Auctionid { get; set; }

    public int? Eventid { get; set; }

    public int? Vehicleid { get; set; }

    public decimal BasePrice { get; set; }

    public DateTime AuctionStart { get; set; }

    public DateTime AuctionEnd { get; set; }

    //public virtual ICollection<Approval> Approvals { get; set; } = new List<Approval>();

    //public virtual ICollection<CurrentAuction> CurrentAuctions { get; set; } = new List<CurrentAuction>();

    //public virtual Event? Event { get; set; }

    //public virtual AllVehiclesDetail? Vehicle { get; set; }
}
