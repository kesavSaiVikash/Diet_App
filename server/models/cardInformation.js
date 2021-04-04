import mongoose from "mongoose"

const cardSchema = mongoose.Schema({
    mealNumber : String,
    mealType : String,
    mealDescription : String
})

const cardInformation = mongoose.model( "cardInformation", cardSchema )

export default cardInformation