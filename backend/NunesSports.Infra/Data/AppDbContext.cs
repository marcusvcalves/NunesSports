using Microsoft.EntityFrameworkCore;
using NunesSports.Domain.Entities;

namespace NunesSports.Infra.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Product>? Products { get; set; }
    }
}
