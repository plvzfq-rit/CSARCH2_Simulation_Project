const express = require('express');
const router = require('./src/routes/router.js');

async function main() {
    let port = 3001;
    const app = express();

    app.use(express.static('public'));

    app.use(router);

    app.listen(port, async function() {
        console.log(`express app is now listening on port ${port}`);
    });
}


main();