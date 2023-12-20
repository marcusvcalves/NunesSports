using Microsoft.AspNetCore.Mvc;
using NunesSports.Domain.Entities;
using NunesSports.Infra.Data;
using NunesSports.Infra.Repositories;

namespace NunesSports.API.Controllers
{
    [ApiController]
    [Route(template: "api/v1/products")]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IProductRepository _productRepository;

        public ProductController(AppDbContext context, IProductRepository productRepository)
        {
            _context = context;
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<Product> products = await _productRepository.GetAllAsync();

            return Ok(products);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            Product product = await _productRepository.GetByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
        [HttpPost]
        public async Task<IActionResult> Create(Product product)
        {
            Product newProduct = await _productRepository.CreateAsync(product);

            return CreatedAtAction(nameof(GetById), new { id = product.Id }, newProduct);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update (int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            Product productToUpdate = await _productRepository.GetByIdAsync(id);

            if (productToUpdate != null)
            {
                await _productRepository.UpdateAsync(id, product);

                return Ok(productToUpdate);
            }

            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            Product productToDelete = await _productRepository.GetByIdAsync(id);

            if (productToDelete != null)
            {
                await _productRepository.DeleteAsync(id);

                return Ok(productToDelete);
            }

            return NotFound();
        }


    }
}
