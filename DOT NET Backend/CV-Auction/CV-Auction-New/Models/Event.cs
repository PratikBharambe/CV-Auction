using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class Event
{
    public int Eventid { get; set; }

    public string Eventname { get; set; } = null!;

    public string Vehicletype { get; set; } = null!;

    public DateTime Startdatetime { get; set; }

    public DateTime Enddatetime { get; set; }

    public string Location { get; set; } = null!;

    public decimal BasePrice { get; set; }

    public int Noofvehicles { get; set; }

    //public virtual ICollection<AllVehiclesDetail> AllVehiclesDetails { get; set; } = new List<AllVehiclesDetail>();

    //public virtual ICollection<Approval> Approvals { get; set; } = new List<Approval>();

    //public virtual ICollection<CurrentAuction> CurrentAuctions { get; set; } = new List<CurrentAuction>();

    //public virtual ICollection<HostAuction> HostAuctions { get; set; } = new List<HostAuction>();
}
