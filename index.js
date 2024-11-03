const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nftRoutes = require('./routes/nft');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
// Enable CORS for your frontend
app.use(cors({
    origin: 'http://localhost:3000'
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/nfts', nftRoutes);

// Route to serve MyNFT.json file
app.get('/contract', (req, res) => {
  const filePath = path.join(__dirname, 'contracts', 'MyNFT.json');
  res.sendFile(filePath);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
