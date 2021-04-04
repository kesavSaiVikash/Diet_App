import * as api from "../api/index.js"


export const getCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCards()
        dispatch({ type: 'FETCH_ALL', payload: data })   
    } catch (error) {
        console.log(error.message)
    }
}

export const createCard = (newCard) => async (dispatch) => {
    try {
        const { data } = await api.createCard(newCard)
        dispatch({ type: 'CREATE', payload: data })   
    } catch (error) {
        console.log(error.message)
    }
}