export const address = async (req, res) => {
  try {
    const { name, phone, street, city, state, pincode, landmark } = req.body;

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
      res.status(400).json({ message: "all require field must be provided" });
    }

    const newaddress = await prisma.address.create({
      data: {
        name,
        phone,
        street,
        city,
        state,
        pincode,
        landmark,
      },
    });


    console.log("newaddress");

  return  res.status(201).json({
    message: "address added sucessfully",
    address: newaddress,
  })








  } catch (error) {
    console.log("error")
  }
};
