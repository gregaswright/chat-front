import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:3000';
    const queryStringData = window.location.search;

    useEffect(() => {
        const {name, room} = queryString.parse(queryStringData);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join', { name, room });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, queryStringData]);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Chat;