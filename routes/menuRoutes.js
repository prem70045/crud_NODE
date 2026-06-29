const express = require('express');
const router =express.Router();
const Menu =require('./../models/Menu')
router.get('/',async(req,res)=>{
    try{
        const data =await Menu.find();
        console.log(data);
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }

})

router.post('/',async(req,res)=>{
    try{
        const data =req.body;
        const newData =new Menu(data);
        const response =await newData.save()
        console.log(response);
        res.status(200).json('data saved');

    }catch(err)
    {
        console.log(err);
        res.status(500).json({err:'internal error'});
    }
})

router.get('/:taste', async (req, res) => {
    const taste = req.params.taste;

    if (taste === 'sweet' || taste === 'spicy' || taste === 'sour') {
        try {
            const data = await Menu.find({ taste: taste });

            console.log(data);
            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).json({ err: 'Internal server error' });
        }
    } else {
        res.status(404).json({ message: 'Page not found' });
    }
});
module.exports=router;
