const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes);
app.listen(3000, () => console.log('listening on url http://localhost:3000'));
