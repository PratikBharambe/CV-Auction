using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CV_Auction099.Models
{
    public partial class WinnerTable
    {
        public int AllowedUserUid { get; set; }
        public int VehicleId { get; set; }
        public int AuctionId { get; set; }
        public int? WinnerId { get; set; }
        public DateTime? AuctionEndDate { get; set; }

        [JsonIgnore]
        public virtual AuctionStatusTrack AuctionStatusTrack { get; set; } = null!;
        
        [JsonIgnore]
        public virtual Approval? Approval { get; set; }
    }
}
