const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require("./connect")
const {checkForAuthentication, restrictTo,} = require('./middlewares/auth');

const URL = require("./models/url");

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/url', restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use('/user', userRoute);
app.use('/', staticRoute);


app.get("/url/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortUrl: shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    res.redirect(entry.originalUrl);
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    