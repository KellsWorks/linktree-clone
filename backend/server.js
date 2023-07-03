const express = require('express');
const app = express();
const port = process.env.PORT

/**
 * routes
 */
app.get('/', (req, res) => {
    req.json({message: `Express App is running on port ${port}`});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
