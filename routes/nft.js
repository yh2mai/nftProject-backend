const express = require('express');
const router = express.Router();
const NFTListing = require('../models/NFTListing');

// List a new NFT
router.post('/list', async (req, res) => {
    try {
        const { owner, nftName, tokenId, price, imageUrl } = req.body;
        const newNFT = new NFTListing({ owner, nftName, tokenId, price, imageUrl });
        await newNFT.save();
        res.json(newNFT);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all listed NFTs
router.get('/listings', async (req, res) => {
    try {
        const listings = await NFTListing.find();
        res.json(listings);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
