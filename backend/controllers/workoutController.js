const Weblink = require('../models/weblink');
const User = require('../models/user');
const mongoose = require('mongoose');
const weblink = require('../models/weblink');

const create = async (req, res) => {

    const { title, link } = req.body;

    try {
        const weblink = await Weblink.create({title, link, user:req.user})
        res.status(200).json({message: 'Weblink created successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const read = async (req, res) => {

    const user = await User.find({username:req.params.username}).lean();


    const weblinks = await Weblink.find({user}).sort({createdAt: -1})

    res.status(200).json({weblinks: weblinks});
}

const getWeblink = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'weblink not found'});
    }

    const weblink = await Weblink.findById(id);

    if(!weblink){
        res.status(404).json({error: 'weblink not found'});
    }

    res.status(200).json({weblink: weblink});
}

const deleteWeblink = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'weblink not found'});
    }

    const weblink = await Weblink.findOneAndDelete({_id: id});

    if(!weblink){
        res.status(404).json({error: 'weblink not found'});
    }

    res.status(200).json({message: 'Weblink deleted successfully'});
}

const update = async (req, res) => {

    try{
      const weblink = await Weblink.findById(req.params.id).lean()
     

      weblink.title = req.body.title,
      weblink.link = req.body.link

      await weblink.findOneAndUpdate(
        {
            _id:req.params.id,

        },{
            title: req.body.title,
            link:req.body.link,
        },
        {
            new:true,
        }
      )

      res.status(200).json({"message":"Weblink updated"})

    } catch(err) {

    }

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'weblink not found'});
    }

    const weblink = await Weblink.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!weblink){
        res.status(404).json({error: 'weblink not found'});
    }

    res.status(200).json({message: 'Weblink updated successfully'});
}

module.exports = {
    create,
    read,
    update,
    getWeblink,
    deleteWeblink
}
