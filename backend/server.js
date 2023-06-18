const express = require('express');
const app = express();
const PORT = 4578 //PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend

mongoose.connect('mongodb+srv://jumanathasneem653:q7MLE3i7h3HNOBTQ@cluster0.jjhm4pj.mongodb.net/MES')
.then(()=>{console.log("Mongo connected")})
.catch((err)=>{console.log(err)})


// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE
const PRODUCT = require("./model/product")

app.post('/addData',async (req, res) => {
    try {

        let item = req.body
        console.log(item)
        const saveData = await PRODUCT(item) //PRODUCT is a model. we cross check the form data with the model we created before saving it
        console.log(saveData)

        await saveData.save()  // through this code we save the incoming data from front end to db 
        res.send((saveData))



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});