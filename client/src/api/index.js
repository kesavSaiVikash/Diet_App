import axios from 'axios'

const URL = "http://localhost:5000/cards"

export const fetchCards = () => axios.get(URL)
export const createCard = (newCard) => axios.post(URL, newCard)