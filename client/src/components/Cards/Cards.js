
import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Cards = () => {
    const classes = useStyles()
    const cards = useSelector((state) => state.cards);
    const handleEdit = () => {

    }
    
    return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {cards.map((card) => (
        <Grid key={card._id} item xs={12} sm={6} md={6}>
            { JSON.stringify(`ID: ${card._id}; Meal Number: ${card.mealNumber}; Meal Type: ${card.mealType}; Meal Description: ${card.mealDescription}`) }
            <button onClick = {handleEdit}>Edit</button>
        </Grid>
        ))}
    </Grid>
    )
}

export default Cards
