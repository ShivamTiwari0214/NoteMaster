const express = require('express');
const router = express.Router();
const fetchusers = require("../middleware/fetchusers");
const Notes = require("../models/Notes");
const {body, validationResult} = require("express-validator");


// Route 1 for fetching all Notes. It uses Authentication Token
router.get('/fetchallnotes', fetchusers , async (req,res)=>{

    try {
        const errors = validationResult(req);
    const notes = await Notes.find({user:req.user.id}) ;
    res.json(notes)
    } catch (error) {
        res.status(500).send({errors:error.array()});
    }
    
})

// Route 2 for Adding New Notes. It uses Authentiction Token and js validator 

router.post('/addnotes', fetchusers,
    [
    body('title','Title Required').exists().notEmpty(),
    body('descricption','Descricption Required').escape().notEmpty(),
    body('tag','Required Valid Tag').escape().exists().notEmpty()
], fetchusers , async (req,res)=>{

    try {
        const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).send({errors:errors.array()});
    }
    const note =  new Notes({
        user:req.user.id,
        title:req.body.title,
        descricption:req.body.descricption,
        tag:req.body.tag
    })
    console.log(req.user.id)
    const savedNotes = await note.save() ;
    res.json(savedNotes)

    } catch (error) {

        res.status(500).send(error);
    }
    
})

// Route 3 to udate an existing note


router.put('/updatenotes/:id', fetchusers , async (req,res)=>{
    
    const newNote ={} ;

    if(req.body.title)newNote.title=req.body.title ;
    if(req.body.tag)newNote.tag=req.body.tag;
    if(req.body.descricption)newNote.descricption=req.body.descricption;

    let note = await Notes.findById(req.params.id);
    if(!note) return res.status(404).send("Not Found")
    if(note.user != req.user.id) return res.status(401).send("Acess is Denied");

    note = await  Notes.findByIdAndUpdate(req.params.id ,{$set:newNote} ,
    {
        new:true,
        runValidators:true
    });
    res.json({note});
})


router.delete('/deletenotes/:id',fetchusers, async(req,res)=>{

    try {
        let note = await Notes.findById(req.params.id);
    console.log(note)
    if(!note) return res.status(404).send("Note Not Found")

    if(note.user !=req.user.id) return res.status(401).send("Delete not allowed")
    
    note = await Notes.findByIdAndDelete(req.params.id);
    res.send("Sucessful")
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
    
})
module.exports = router