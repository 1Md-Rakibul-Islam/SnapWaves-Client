import React, { useRef, useState, useEffect } from "react";
import "./Chat.css";
import { useDispatch, useSelector } from "react-redux";
import {userChats} from "../../api/ChatRequest";
import Conversation from "../../Component/Conversation/Conversation";
import ChatBox from "../../Component/ChatBox/ChatBox";
import { Box, Container, Paper, Typography } from "@mui/material";
import { io } from "socket.io-client";

const Chat = () => {
  const dispatch = useDispatch();

  const socket = useRef();
  const currentUser = useSelector((state) => state.currentUser.user);
  const loading = useSelector((state) => state.currentUser.loading);
  //   console.log(currentUser);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(currentUser?._id);
        setChats(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [currentUser?._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", currentUser?._id);
    socket.current.on("get-users", (users) => {
      // console.log(users);
      setOnlineUsers(users);
    });
  }, [currentUser]);

  // sending message from spocket server
  useEffect(() => {
    // console.log(sendMessage);
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log('recive message from socket', data)
      setReceivedMessage(data);
    });

  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat?.members?.find(
      (member) => member !== currentUser?._id
    );
    const online = onlineUsers?.find((user) => user?.userId === chatMember);
    return online ? true : false;
  };

  console.log(receivedMessage);

  return (
    <Container
      sx={{
        columnGap: 5,
        overflowX: "hidden",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          Width: "300px",
          height: { md: "80vh", xs: "89vh" },
          overflowY: "scroll",
          bgcolor: "white",
          borderRadius: 2,
          p: 2,
          position: "fixed",
        }}
      >
        <Box>
          <Box sx={{}}>
            {chats?.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation
                  key={chat?._id}
                  data={chat}
                  currentUser={currentUser?._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Right Side */}
      <Box sx={{ ml: { sm: 25, xs: 15 } }}>
        <ChatBox
          chat={currentChat}
          currentUser={currentUser?._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </Box>
    </Container>
  );
};

export default Chat;
