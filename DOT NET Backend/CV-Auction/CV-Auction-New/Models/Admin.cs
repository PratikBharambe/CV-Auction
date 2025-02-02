using System;
using System.Collections.Generic;

namespace CV_Auction_New.Models;

public partial class Admin
{
    public int Aid { get; set; }

    public string Aname { get; set; } = null!;

    public string Apwd { get; set; } = null!;

    public string Aemail { get; set; } = null!;

    public string Role { get; set; } = null!;
}
