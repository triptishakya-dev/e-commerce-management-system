import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postaddress = async (req, res) => {
  try {
    console.log("api is running");

    const { userId, name, phone, street, city, state, pincode, landmark } = req.body;

    console.log(req.body);
    if (
      !name ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !pincode ||
      !landmark
    ) {
      console.log("all field must be require");
      return res
        .status(400)
        .json({ message: "all require field must be provided" });
    }

    const newapostddress = await prisma.Address.create({
      data: {
        name,
        userId,
        phone,
        street,
        city,
        state,
        pincode,
        landmark,
      },
    });

    console.log(newapostddress);

    return res.status(201).json({
      message: "address added sucessfully",
      postaddress: newapostddress,
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({ message: "Internal server error" });
  }
};
