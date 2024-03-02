
const ResComponent = require('../models/comSchema');

// ResComponent APIs

let apiCounter = 0;

const clearAndAdd = async (req, res) => {
    apiCounter++;
  try {
    const { data } = req.body;
    // Clear existing data
    await ResComponent.deleteMany({});
    // Add new data
    await ResComponent.create({ data });
    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateResData = async (req, res) => {
    apiCounter++;
  try {
    const { data } = req.body;
    // Update data
    await ResComponent.findOneAndUpdate({}, { data });
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCounterData = async () => {
  try {
    const count = apiCounter;
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export All APIs

module.exports = {
    clearAndAdd, updateResData, getCounterData
}