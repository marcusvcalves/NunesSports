using NunesSports.Domain.Entities;

namespace NunesSports.Infra.Repositories
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAllAsync();
        Task<Product> GetByIdAsync(int id);
        Task<Product> CreateAsync(Product newProduct);
        Task UpdateAsync(int id, Product product);
        Task DeleteAsync(int id);
    }
}
