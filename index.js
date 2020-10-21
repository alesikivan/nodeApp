// library connection and dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// routes
const homeRoutes = require('./routes/index');
const economyRoutes = require('./routes/economy');
const statisticRoutes = require('./routes/statistic');
const addRoutes = require('./routes/add');

// create server
const app = express();

// configurare handlebars (hbs) module
const hbs = exphbs.create({
    // default layout of application
    defaultLayout : 'main',
    // file extension
    extname : 'hbs',
    // hasOwnProperty off
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

// express register hbs engine
app.engine('hbs', hbs.engine);

//using hbs engine
app.set('view engine', 'hbs');
// register folder name with layouts and pages
app.set('views', 'views');

// public folder register
app.use(express.static( path.join( __dirname, 'public' ) ));

// buffer encodeded
app.use(express.urlencoded({ extended : true }));

// data treatment
app.use('/', homeRoutes);
app.use('/statistic', statisticRoutes);
app.use('/add', addRoutes);
app.use('/economy', economyRoutes);

// dynamic port value (if exist)
const PORT = process.env.PORT || 3000;

// mongodb connection
async function start(){
    const password = 'saua70zNav6dogla';
    const dbName = 'nodeDB';
    try {
        // generating
        const url = `mongodb+srv://alesikivan:${password}@cluster0.pwtfp.mongodb.net/${dbName}`;
        await mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology: true});

        // server listen on PORT
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start()
