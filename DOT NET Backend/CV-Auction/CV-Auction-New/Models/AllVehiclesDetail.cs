using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class AllVehiclesDetail
{
    public int Vehicleid { get; set; }

    public string RegNo { get; set; } = null!;

    public int RegYear { get; set; }

    public string ManufacName { get; set; } = null!;

    public string ModelName { get; set; } = null!;

    public string? FuelType { get; set; }

    public string? Insurance { get; set; }

    public int? KmDriven { get; set; }

    public string? RtoPassing { get; set; }

    public int YearOfManufacturing { get; set; }

    public string? ParkingLocation { get; set; }

    public int? Eventid { get; set; }

    //public virtual ICollection<Approval> Approvals { get; set; } = new List<Approval>();

    //public virtual ICollection<CurrentAuction> CurrentAuctions { get; set; } = new List<CurrentAuction>();

    //public virtual Event? Event { get; set; }

    //public virtual ICollection<HostAuction> HostAuctions { get; set; } = new List<HostAuction>();
}
