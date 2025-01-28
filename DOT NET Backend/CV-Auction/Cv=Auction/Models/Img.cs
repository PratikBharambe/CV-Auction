using System;
using System.Collections.Generic;

namespace Cv_Auction.Models
{
    public partial class Img
    {
        public Img()
        {
            TotalVehicles = new HashSet<TotalVehicle>();
        }

        public int Imgid { get; set; }
        public string Imgurl { get; set; } = null!;

        public virtual ICollection<TotalVehicle> TotalVehicles { get; set; }
    }
}
