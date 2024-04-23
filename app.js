const express = require('express');
const user = require('./routes/userRoutes.js');
const product = require('./routes/productRoutes.js');
const connectDB = require('./config/configDB.js');

const app=express();
connectDB();

const PORT= 8000;


app.get('/',(req,res)=>{
    res.send('Home')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.route('/',user);
app.use('/',user);
// app.route('/product',product);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
  });

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
})