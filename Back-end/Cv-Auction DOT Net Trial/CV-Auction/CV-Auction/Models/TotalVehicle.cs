using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class TotalVehicle
    {
        public TotalVehicle()
        {
            AuctionLists = new HashSet<AuctionList>();
        }

        public int Vehicleid { get; set; }
        public int? Imgid { get; set; }
        public int? DetailsId { get; set; }

        public virtual VehicleDetail? Details { get; set; }
        public virtual Img? Img { get; set; }
        public virtual ICollection<AuctionList> AuctionLists { get; set; }
    }
}
