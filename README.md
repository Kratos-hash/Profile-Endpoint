# Profile-Endpoint

# Features
 `/me` GET endpoint that returns:
  - Personal info (email, name, stack)
  - Current UTC timestamp in ISO format
  - Random cat fact from external API
- Handles API timeouts/failur
- Returns proper JSON response with `Content-Type: application/json`



## Tech Stack

- Runtime:Node.js
- Framework:Express.js
- HTTP Client:Axios
- Hosting: Railway
- External API: [Cat Facts API](https://catfact.ninja/fact)

---

# Installation

Clone the repo:

``bash
git clone https://github.com/Kratos-hash/Profile-Endpoint.git
cd Profile Endpoint
npm install
npm install -D nodemon

# To Run Code

npm run start 

# Testing

Visit: https://profile-endpoint-production-44d2.up.railway.app/me
