const Product = require("../model/ProductModel");

class ProductRepository {
  async findAll() {
    try {
      return await Product.find();
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  }

  async findById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      throw new Error("Error fetching product by ID: " + error.message);
    }
  }

  async create(productData) {
    try {
      const product = new Product(productData);
      return await product.save();
    } catch (error) {
      throw new Error("Error creating product: " + error.message);
    }
  }

  async update(id, productData) {
    try {
      return await Product.findByIdAndUpdate(id, productData, { new: true });
    } catch (error) {
      throw new Error("Error updating product: " + error.message);
    }
  }

  async delete(id) {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error deleting product: " + error.message);
    }
  }
}

module.exports = new ProductRepository();
