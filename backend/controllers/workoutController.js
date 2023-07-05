const Weblink = require('../models/weblink');
const mongoose = require('mongoose');

const create = async (req, res) => {

    const { title, link } = req.body;

    try {
        const weblink = await Weblink.create({title, link})
        res.status(200).json({message: 'Weblink created successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const read = async (req, res) => {

    const weblinks = await Weblink.find({}).sort({createdAt: -1})

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
