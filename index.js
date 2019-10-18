const express   = require('express');
const path      = require('path');
const app       = express();

app.use(express.static('public'));
const nm_dependencies = ['lit-element']; // keep adding required node_modules to this array.
nm_dependencies.forEach(dep => {
    app.use(`/${dep}`, express.static(path.resolve(`node_modules/${dep}`)));
});

app.listen(3000);