import post from "../models/PostModels.js";

const createData = async (req, res) => {
  try {
    const { name, hobi, alamat, nomor_telp } = req.body;
    const data = await post.create({ name, hobi, alamat, nomor_telp });
    res.status(201).json({ message: "Data Created", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await post.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, hobi, alamat, nomor_telp } = req.body;
    const data = await post.findByIdAndUpdate(
      id,
      { name, hobi, alamat, nomor_telp },
      { new: true }
    );
    res.status(200).json({ message: "Data Updated", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const detailData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await post.findById(id);
    res.status(200).json({ message: "Data Detail", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await post.findByIdAndDelete(id);
    res.status(200).json({ message: "Data Deleted", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createData, getData, updateData, detailData, deleteData };
