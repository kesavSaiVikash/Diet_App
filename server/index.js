import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import cardRoutes from "./routes/cards.js" 

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/cards", cardRoutes)

const PORT = process.env.PORT || 5000
const DATABASE_URl = "mongodb+srv://mernstack:mernstack@cluster0.sgeq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(DATABASE_URl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Port running sucessfully at: ${PORT}`)))
    .catch((erorr) => console.log(error.message))