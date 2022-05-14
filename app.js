const express = require('express');
const Gun = require('gun');

const app = express();
const port = process.env.PORT || 8080;
app.use(Gun.serve);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

Gun({ file: 'db/data', web: server });