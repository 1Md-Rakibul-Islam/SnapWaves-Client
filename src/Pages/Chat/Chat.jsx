import React, { useRef, useState } from "react";
import "./Chat.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersChats } from "../../api/ChatRequest";
import Conversation from "../../Component/Conversation/Conversation";
import ChatBox from "../../Component/ChatBox/ChatBox";
import { Paper, Typography } from "@mui/material";
import {io} from "socket.io-client"
import MainNavBar from "../../Component/MainNavBAr/MainNavBar";

const Chat = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.user);
  const loading = useSelector((state) => state.currentUser.loading);
  //   console.log(currentUser);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  // Connect to Socket.io
  useEffect(() => {
    console.log("sock", currentUser?._id);
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", currentUser?._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await usersChats(currentUser?._id);
        setChats(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [currentUser]);

  // console.log(onlineUsers);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat?.members?.find((member) => member !== currentUser?._id);
    const online = onlineUsers?.find((user) => user?.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <MainNavBar />
      <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
          <div className="Chat-container">
            <div className="Chat-list">
              {chats?.map((chat) => (
                <div onClick={() => setCurrentChat(chat)}>
                  <Conversation
                   data={chat}
                   currentUserID={currentUser?._id}
                   online={checkOnlineStatus(chat)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="Right-side-chat">
          <ChatBox chat={currentChat} currentUser={currentUser?._id} />
        </div>
      </div>
    </>
  );
};

export default Chat;