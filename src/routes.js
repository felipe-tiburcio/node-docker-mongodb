const { Router } = require("express");
const ProductController = require("./controller/ProductController");

const router = Router();

router.get("/health", (req, res) => {
  try {
    return res.status(200).json({ message: "API is running..." });
  } catch (error) {
    console.log(`An error occurred: ${error}`);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getProductById);
router.post("/products", ProductController.createProduct);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
