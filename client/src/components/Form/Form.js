import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from "react-redux"
import { createCard } from "../../actions/cards"

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [ cardData, setCardData ] = useState({ mealNumber: " ", mealType: " ", mealDescription: " " })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createCard(cardData))
    }

    const clear = () => {
    }

    return (
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Diet Card</Typography>
        <TextField name="mealNumber" variant="outlined" label="Meal Number" fullWidth value={cardData.mealNumber} onChange={(e) => setCardData({ ...cardData, mealNumber: e.target.value })} />
        <TextField name="mealType" variant="outlined" label="Meal Type" fullWidth value={cardData.mealType} onChange={(e) => setCardData({ ...cardData, mealType: e.target.value })} />
        <TextField name="mealNumber" variant="outlined" label="Meal Description" fullWidth value={cardData.mealDescription} onChange={(e) => setCardData({ ...cardData, mealDescription: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
    )
}

export default Form
