import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';
import db from "./firebase";
import {Link} from "react-router-dom";


function SidebarChat({id, name, addNewChat}){
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

useEffect(() => {
    if (id){
        db.collection('Group').doc(id).collection('chats').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
}, []);

    useEffect(() =>{
      setSeed(Math.floor(Math.random()*5000))
    }, []);
const createChat = () =>{
    const groupName = prompt("Please enter group name for chat");

    if(groupName) {
        // insert to a database
        db.collection('Group').add({
            name: groupName,
        });
    }
};

    return !addNewChat ?(
        <Link to={`/groups/${id}`}>
            <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                {/* <h2>Group name</h2> */}
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>

        </div>
        </Link>
        
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new group</h2>
        </div>

    );
}
export default SidebarChat