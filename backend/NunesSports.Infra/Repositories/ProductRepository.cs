using Microsoft.EntityFrameworkCore;
using NunesSports.Domain.Entities;
using NunesSports.Infra.Data;

namespace NunesSports.Infra.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.ToListAsync();
        }
        public async Task<Product> GetByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);
        }
        public async Task<Product> CreateAsync(Product newProduct)
        {
            _context.Products.Add(newProduct);
            await _context.SaveChangesAsync();

            return newProduct;
        }
        public async Task UpdateAsync(int id, Product product)
        {
            Product existingProduct = await GetByIdAsync(id);

            if (existingProduct != null)
            {
                existingProduct.Name = product.Name;
                existingProduct.Code = product.Code;
                existingProduct.Description = product.Description;
                existingProduct.Price = product.Price;

                await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteAsync(int id)
        {
            Product productToDelete = await GetByIdAsync(id);

            if (productToDelete != null)
            {
                _context.Products.Remove(productToDelete);

                await _context.SaveChangesAsync();
            }
        }
    }
}
