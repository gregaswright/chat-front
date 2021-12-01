import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {

    const inputChangeHandler = (event) => {
        setMessage(event.target.value)
    }

    const inputKeyPressHandler = (event) => {
        return event.key === 'Enter' ? sendMessage(event) : null
    }

    return (
        <form>
            <input 
            type='text'
            placeholder='...'
            value={message} 
            onChange={inputChangeHandler} 
            onKeyPress={inputKeyPressHandler}/>
        </form>
    )
}

export default Input;