require('dotenv').config();

const express = require('express');
const weblinkRoutes = require('./routes/weblink')

const app = express();
const port = process.env.PORT

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({message: `Express App is running on port ${port}`});
})

app.use('/api/weblink', weblinkRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
