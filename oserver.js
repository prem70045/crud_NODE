const express= require('express');
const app = express();
const db = require('./db');
const Person =require('./models/Person')
const MenuItems = require('./models/Menu');
const personRoutes = require('./routes/personRoutes')
const menuRoutes =require('./routes/menuRoutes')
const bodyParser =require("body-parser");
require('dotenv').config();
app.use(bodyParser.json()); /// store kar lega body.parser me 
app.get('/',function(req,res){
    res.send("hello world")
});
// app.post('/person',async (req,res)=>{
//     // const data =req.body // assumin req.body store info
//     // const newPerson = new Person();
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.email = data.email;
//     // newPerson.address = data.address;

//     // save new Person....bt ab aise nhi  karte 
//     // const newPerson = new Person(data);
//     // newPerson.save((err,savedPerson)=>{
//     //     if(err)
//     //     {
//     //         console.log('Error saving person',err);
//     //         res.status(500).json({error:'internal server error'})
//     //     }
//     //     else
//     //     {
//     //         console.log("data save succesfully");
//     //         res.status(200).json(savedPerson)
//     //     }
//     // })



//     try{
//         const data = req.body

//         const newPerson= new Person(data);
//         const response =await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response)


//     }catch(err)
//     {
//         console.log(err);
//         res.status(500).json({err:'internal server error'})

//     }
// })

// app.get('/person',async(req,res)=>{
//     try{
//         const data =await Person.find();
//         console.log("data fetch succesfully ");
//         res.status(200).json(data);



//     }
//     catch(err)
//     {
//         console.log('data saved');
//         res.status(500).json('found error');
//     }
// })
// app.post('/menuItems',async(req,res)=>{
//     try{
//         const data = req.body

//         const items= new MenuItems(data);
//         const response =await items.save();
//         console.log('data saved');
//         res.status(200).json(response)

//     }
//     catch(err)
//     {
//         console.log(err)
//         res.status(500).json('found error');

//     }
// })




// app.get('/menuItems',async(req,res)=>{
//     try{
//          const data =await MenuItems.find();
//          console.log('data saved');
//          res.status(200).json(data)

//     }
//     catch(err)
//     {
//         console.log(err)
//         res.status(500).json('found error');

//     }
// })




//  Paramatrized API
// app.get('/person/:workType', async(req,res)=>{
//      const workType = req.params.workType;
//     try {if(workType =='chef' || workType =='manager' || workType=='waiter')
//      {
//         const response = await Person.find({work:workType});
//         console.log('response fetched');
//         res.status(200).json(response);
//      }
//      else
//      {
//         res.status(404).json({error:'invalid work type'});
//      }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server Error'});
//     }
// })


// routes use larne ke liye
app.use('/person',personRoutes);
app.use('/menuItems',menuRoutes);



const PORT =process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is listening...")
});