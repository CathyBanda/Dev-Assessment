// // server/index.js
//
// const express = require("express");
//
//
//
// const PORT = process.env.PORT || 8080;
//
// const app = express();
//
// // simple route
// app.all('/', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next()
//  });
//
// app.get("/api", (req, res) => {
//   res.json({ message: "Thank you!" });
// });
//
//
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('.React-Project/models/index.js')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const Name = req.body.name
    const Height = req.body.height
    const Email = req.body.email

    const formData = new User({
        name: Name,
        height: Height,
        email: Email

    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


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
//     })
