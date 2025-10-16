import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express ();
const PORT = process.env.PORT || 5000;

app.use (cors ());
app.use (express.json ());

app.listen(PORT, () => console.log(`Server running on port ${PORT}` ));

//  /me endpoint
app.get('/me', async (req, res) => {
    
    try {
        // fetching cat fact from a external API
         const response = await axios.get('https://catfact.ninja/fact', {timeout: 5000});

        // Response Build ups
        const profile = {
            status: "success",
            user: {
            email: "adewwaleolorunosebi@gmail.com",
            name: "OLORUNOSEBI ADEWALE",
            stack: "MERN STACK"
   },
   timestamp: new Date().toISOString(),
   fact: response.data.fact
        };
        res.status(200).json(profile);
    } catch (error) {
        console.error("Error Fetching Cat Fact:", error.message);

        // fallback response incase cat fact API fails
        res.status(500).json({
            status: "error",
            message: "could not fetch cat fact. Please try again later.",
            timestamp: new Date().toISOString()
        });

    }

});