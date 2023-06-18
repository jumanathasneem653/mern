const express = require('express');
const app = express();
const PORT = 4578 //PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend

mongoose.connect('mongodb+srv://jumanathasneem653:q7MLE3i7h3HNOBTQ@cluster0.jjhm4pj.mongodb.net/')
.then(()=>{console.log("Mongo connected")})
.catch((err)=>{console.log(err)})


// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});