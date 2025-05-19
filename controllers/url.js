const {nanoid} = require('nanoid');
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"});
    const shortID = nanoid(8);

    await URL.create({
        shortUrl: shortID,
        originalUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render("home", {
        id: shortID
    })
    return res.json({ id: shortID }); 
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortUrl: shortId });
    res.json({
        totalClicks: entry.visitHistory.length,
        visitHistory: entry.visitHistory.map((visit) => {
            return {
                timestamp: visit.timestamp,
                date: new Date(visit.timestamp).toLocaleDateString(),
                time: new Date(visit.timestamp).toLocaleTimeString(),
            }
        })
    })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}