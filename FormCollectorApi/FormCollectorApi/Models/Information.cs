using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;

namespace FormCollectorApi.Models;

public partial class Information
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Documents { get; set; } = string.Empty;

    public string Deadline { get; set; }=string.Empty;

    public string Link { get; set; } = null!;
}
