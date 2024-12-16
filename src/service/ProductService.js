const productRepository = require("../repository/ProductRepository");

class ProductService {
  async getAllProducts() {
    try {
      return await productRepository.findAll();
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  }

  async getProductById(id) {
    try {
      const product = await productRepository.findById(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error("Error fetching product by ID: " + error.message);
    }
  }

  async createProduct(productData) {
    try {
      return await productRepository.create(productData);
    } catch (error) {
      throw new Error("Error creating product: " + error.message);
    }
  }

  async updateProduct(id, productData) {
    try {
      const product = await productRepository.update(id, productData);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error("Error updating product: " + error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const product = await productRepository.delete(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return { message: "Product deleted successfully" };
    } catch (error) {
      throw new Error("Error deleting product: " + error.message);
    }
  }
}

module.exports = new ProductService();
