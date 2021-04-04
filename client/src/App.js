import React, { useEffect }from 'react'
import Form from './components/Form/Form.js'
import Cards from './components/Cards/Cards.js'
import { useDispatch } from "react-redux"
import { getCards } from './actions/cards';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCards())
    }, [dispatch])
    return (
        <>
            <Form />
            <Cards />
        </>
    )
}

export default App
