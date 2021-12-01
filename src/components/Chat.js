import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Input from './Input'

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:3000';
    const queryStringData = window.location.search;

    useEffect(() => {
        const {name, room} = queryString.parse(queryStringData);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, queryStringData]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])  
    


    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages)

    return (
        <div>
            <div>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;