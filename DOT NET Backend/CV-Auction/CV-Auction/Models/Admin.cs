using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class Admin
    {
        public Admin()
        {
            AuctionLists = new HashSet<AuctionList>();
            CurrentAuctions = new HashSet<CurrentAuction>();
        }

        public int Aid { get; set; }
        public string Aname { get; set; } = null!;
        public string Apwd { get; set; } = null!;
        public string Aemail { get; set; } = null!;

        public virtual ICollection<AuctionList> AuctionLists { get; set; }
        public virtual ICollection<CurrentAuction> CurrentAuctions { get; set; }
    }
}
