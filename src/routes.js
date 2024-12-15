const { Router } = require("express");

const router = Router();

router.get("/health", (req, res) => {
  try {
    return res.status(200).json({ message: "API is running..." });
  } catch (error) {
    console.log(`An error occurred: ${error}`);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
