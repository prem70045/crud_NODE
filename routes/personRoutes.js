const express =require('express');

const router = express.Router();

const Person =require('./../models/Person');


router.post('/',async(req,res)=>{
   try{const data = req.body;
    const newPerson = new Person(data);
    const response =await newPerson.save();
    console.log(response);
    res.status(200).json('data savedddddd')}
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});


    }
});
router.get('/',async(req,res)=>{
    try{

        const data =await Person.find();
        console.log(data);
        res.status(200).json(data);

    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({err:"Interbnal server error"});
    }
});


      router.get('/:workType', async(req,res)=>{
     const workType = req.params.workType;
    try {if(workType =='chef' || workType =='manager' || workType=='waiter')
     {
        const response = await Person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
     }
     else
     {
        res.status(404).json({error:'invalid work type'});
     }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
// update...
router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; // extract id from the url parameters
        const updatePersonData = req.body;

        const response =await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true, // Return the updated document
            runValidators:true //run mongose validation
        })
        if(!response)
        {
            return res.status(404).json({error:'Person Not Found '});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({err:'invalid '})
    }
})
//delete data

router.delete('/:id',async(req,res)=>{
   try{ const personId = req.params.id;
    const response =await Person.findByIdAndDelete(personId);
    if(!response)
    {
        return res.status.apply(404).json({error:'person not found'});
    }
    console.log('data delete');
    res.status(200).json({message:'person delete succesfully'});
    }catch(err)
    {
        console.log(err);
        res.status(500).json({err:'invalid '})

    }
})

module.exports=router;

