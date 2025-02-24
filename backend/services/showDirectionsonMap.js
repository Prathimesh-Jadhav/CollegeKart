const axios = require("axios");
const showDirectionsMap = async (req, res) => {
    try {
      const { start, end } = req.query; // "lat,lng"
  
      if (!start || !end) {
        return res.status(400).json({ error: "Start and end coordinates are required" });
      }
  
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_MAPS_API_KEY}`;
  
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching directions" });
    }
  }

  module.exports = showDirectionsMap;