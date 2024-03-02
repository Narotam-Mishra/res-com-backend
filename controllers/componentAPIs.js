
const axios = require('axios');
const ResComponent = require('../models/comSchema');

// ResComponent APIs

let apiCounter = 0;

const clearAndAdd = async (req, res) => {
  apiCounter++;
  try {
      let imgId = Math.floor(Math.random() * 101);
      const apiUrl = `https://api.slingacademy.com/v1/sample-data/photos/${imgId}`;
      
      // Fetch data from API
      const response = await axios.get(apiUrl);
      // console.log(response.data);
      const { url, description } = response.data.photo;
      // console.log("Img:",url, "Description:",description);

      // Send image URL and description to the frontend
      res.status(200).json({ url, description });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
};

const updateResData = async (req, res) => {
  apiCounter++;
  try {
      let strArr = ['Wild Card', 'Mystery Card', 'Magic Card', 'Lucky Card', 'Special Card'];

      // Generate random index
      const randomIndex = Math.floor(Math.random() * strArr.length);

      // Select a random string from the array
      const randomString = strArr[randomIndex];

      // Update data
      await ResComponent.findOneAndUpdate({}, { data: randomString });

      res.status(200).json({ message: "Data updated successfully", randomString });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
};

const getCounterData = async (req,res) => {
  try {
    // store API counter into count
    const count = apiCounter;
    // then send the count in response to Frontend
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