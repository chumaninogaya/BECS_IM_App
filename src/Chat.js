import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  Group,
  Message,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Chat.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { groupId } = useParams();
  const [groupName, setGroupName] = useState("");
  const [chats, setChats] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (groupId) {
      db.collection("Group")
        .doc(groupId)
        .onSnapshot((snapshot) => setGroupName(snapshot.data().name));

      db.collection("Group")
        .doc(groupId)
        .collection("chats")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setChats(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [groupId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [groupId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("User typing", input);
    db.collection("Group").doc(groupId).collection("chats").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>{groupName}</h3>
          {/* <p>
               last seen{" "}
               {new Date(chats[chats.timestamp]).toDateString()}
           </p> */}
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {/* Writing JavaScript Code */}
        {chats.map((chat) => (
          <p
            className={`chat__message ${
              chat.name === user.displayName && "chat__receiver"
            }`}
          >
            <span className="chat__name">{chat.name}</span>

            {chat.message}
            <span className="chat__timestamp">
              {new Date(chat.timestamp).toDateString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
export default Chat;
