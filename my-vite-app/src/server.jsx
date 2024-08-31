const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/directions', async (req, res) => {
    const { origin, destination } = req.query;
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching directions:", error);
        res.status(500).json({ error: "Failed to fetch directions" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
