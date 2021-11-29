import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const localNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const localRoomChangeHandler = (event) => {
        setRoom(event.target.value)
    }

    const localClickHandler = (event) => {
       return (!name || !room) ? event.preventDefault() : null
    }

    return (
        <div>
            <div>
                <h1>Join</h1>
                <div><input placeholder='' type='text' onChange={localNameChangeHandler}/></div>
                <div><input placeholder='' type='text' onChange={localRoomChangeHandler}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type='submit'> Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join