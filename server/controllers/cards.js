
import mongoose from 'mongoose';
import cardInformation from '../models/cardInformation.js';

export const getCards = async (req, res) => {
    const cardData = [] = await cardInformation.find()
    try {
        res.status(200).json(cardData)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCard = async (req,res) => {
    const cardData = req.body
    const newCardData = new cardInformation(cardData)
    try {
        await newCardData.save()
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateCard = async (req, res) => {
    const { id: _id } = req.params
    const card = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json("No card with that ID")
    const updateCard = cardInformation.findByIdAndUpdate(_id, card, {new : true})
    res.status(200).json(updateCard) 
}