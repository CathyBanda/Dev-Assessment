const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require("./index.js")

app.use(express.json());
app.use(cors());


const url = "mongodb+srv://cathrinehappiness:baraka6571@cluster0.qp1wtr2.mongodb.net/height?retryWrites=true&w=majority";

mongoose.set('strictQuery', false)

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

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

app.listen(port, "0.0.0.0", () => {
    console.log(`Server started on port ${port}`);
});


// const mongoose = require('mongoose')
//
// const url = "mongodb+srv://cathrinehappiness:baraka6571@cluster0.qp1wtr2.mongodb.net/height?retryWrites=true&w=majority";
//
// mongoose.set('strictQuery', false)
//
// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })
//
//     app.listen(port, () => {
//         console.log(`Server started on port ${port}`);
//     });
