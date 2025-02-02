using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class Approval
{
    public int ApprovalId { get; set; }

    public int? Vehicleid { get; set; }

    public int? Eventid { get; set; }

    public int? Auctionid { get; set; }

    public string Vehiclename { get; set; } = null!;

    public decimal Bidamt { get; set; }

    public string? ApprovalStatus { get; set; }

    //public DateTime? ApprovalDate { get; set; }

    //public virtual HostAuction? Auction { get; set; }

    //public virtual Event? Event { get; set; }

    //public virtual AllVehiclesDetail? Vehicle { get; set; }
}
