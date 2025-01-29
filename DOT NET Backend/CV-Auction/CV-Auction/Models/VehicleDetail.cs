using System;
using System.Collections.Generic;

namespace CV_Auction.Models
{
    public partial class VehicleDetail
    {
        public VehicleDetail()
        {
            TotalVehicles = new HashSet<TotalVehicle>();
        }

        public int DetailsId { get; set; }
        public string Vehicleno { get; set; } = null!;
        public string CarBrand { get; set; } = null!;
        public string State { get; set; } = null!;
        public int RegistrationYear { get; set; }
        public string Model { get; set; } = null!;
        public string? Fuel { get; set; }
        public string? Insurance { get; set; }
        public int? KmDriven { get; set; }
        public string? RtoPassing { get; set; }
        public string? Ownership { get; set; }
        public int? EngineDisplacement { get; set; }
        public int YearOfManufacture { get; set; }
        public decimal Price { get; set; }
        public int? OwnerId { get; set; }

        public virtual User? Owner { get; set; }
        public virtual ICollection<TotalVehicle> TotalVehicles { get; set; }
    }
}
