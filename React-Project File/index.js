// const dbConfig = require("../config/db.config.js");
//
// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
//
// const db = {};
// db.mongoose = mongoose;
// db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);
//
// module.exports = db;

const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
    email: {
        type: Email,
        required: true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User,

//db.js

// const mongoose = require('mongoose')
//
// const url = `Connection String`;
//
// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
    })
