using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class AuctionList
    {
        //public AuctionList()
        //{
        //    CurrentAuctions = new HashSet<CurrentAuction>();
        //}

        public int Eventid { get; set; }
        public string Eventname { get; set; } = null!;
        public string Vehicletype { get; set; } = null!;
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public string Location { get; set; } = null!;
        public int? Aid { get; set; }
        public int? Vehicleid { get; set; }

        //public virtual Admin? AidNavigation { get; set; }
        //public virtual TotalVehicle? Vehicle { get; set; }
        //public virtual ICollection<CurrentAuction> CurrentAuctions { get; set; }
    }
}
