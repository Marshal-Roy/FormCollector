﻿using Microsoft.EntityFrameworkCore;

namespace FormCollectorApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
