import { Prisma } from "@prisma/client";
const Prisma = new PrismaClient();

export const postorder = (req, res) => {
  try {
    const {
      orderNumber,
      userId,
      addressId,
      paymentMethod,
      status,
      totalAmount,
      discount,
      taxAmount,
    } = req.body;

    if (
      !orderNumber ||
      !userId ||
      !addressId ||
      !paymentMethod ||
      !status ||
      !totalAmount ||
      !discount ||
      !taxAmount
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    const newOrder = Prisma.postorder.create({
      orderNumber,
      userId,
      addressId,
      paymentMethod,
      status,
      totalAmount,
      discount,
      taxAmount,
    });

    return res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
