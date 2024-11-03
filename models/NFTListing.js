const mongoose = require('mongoose');

const NFTListingSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    nftName: { type: String, required: true },
    tokenId: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    listedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NFTListing', NFTListingSchema);
