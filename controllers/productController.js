import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addproduct = (req, res) => {
  try {
    console.log(req.body);
    const { name, brand, sku, description, price, stock, category, taxRate } =
      req.body;

    if (
      !name ||
      !brand ||
      !sku ||
      !description ||
      !price ||
      !stock ||
      !category ||
      !taxRate
    ) {
      return res
        .status(400)
        .json({ message: "all require field must be provided" });
    }
    console.log("data is seaving in database");
    const newproduct = prisma.Product.create({
      name,
      brand,
      sku,
      description,
      price,
      stock,
      category,
      taxRate,
    });
    if (!newproduct) {
      return res.status(400).json({ error: "product not  created" });
    }

    console.log("data is savedd");
    console.log(newproduct)
    return res.status(201).json({
      message: "product created successfully",
      addproduct: newproduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
