import React, { useEffect, useRef, useState } from "react";
import { fetchUser } from "../../api/UsersRequests";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "timeago.js";
import { addMessage, fetchMessages } from "../../api/MessageRequest";
import "./ChatBox.css";

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMessage((prevnewMessage) => ({
      ...prevnewMessage,
      [name]: value,
    }));
  };

  // fetch data from header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);

    const getUserData = async () => {
      try {
        const { data } = await fetchUser(userId);
        setUserData(data?.result);
        // console.log(data?.result);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetching data messages

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await fetchMessages(chat?._id);
        // console.log(data);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getMessages();
  }, [chat]);

  // Always scroll to last Message
  useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newMessage?.message);
    const message = {
      chatId: chat?._id,
      senderId: currentUser,
      text: newMessage?.message,
    };
    // console.log(message);

    // send message to socket server
    const receiverId = chat?.members?.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });

    // send message to database
    try {
      const { data } = await addMessage(message);
      //   console.log(data);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat?._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  // console.log("codebr", receivedMessage);

  const scroll = useRef();

  return (
    <Box>
      <Box sx={{ position: "relative" }} className="ChatBox-containe">
        {chat ? (
          <>
            {" "}
            <Paper
              elevation={5}
              sx={{
                display: "flex",
                // position: "fixed",
                alignItems: "center",
                gap: 1.5,
                p: 1,
              }}
            >
              <Avatar
                src={userData?.profileImg}
                alt="Profile"
                sx={{ width: "50px", height: "50px" }}
              />
              <h6>{userData?.name}</h6>
            </Paper>
            {/* <Box sx={{ my: 10 }} className="chat-body">
              {messages?.map((message) => (
                <div
                  className={
                    message?.senderId === currentUser
                      ? "message own"
                      : "message"
                  }
                >
                  <span>{message?.text}</span>
                  <span>{format(message?.createdAt)}</span>
                </div>
              ))}
            </Box> */}
            <Box sx={{ my: 10 }} className="chat-body">
              {messages?.map((message, index) => (
                <div
                  ref={index === messages.length - 1 ? scroll : null} // Add ref to the last message element
                  className={
                    message?.senderId === currentUser
                      ? "message own"
                      : "message"
                  }
                >
                  <span>{message?.text}</span>
                  <span>{format(message?.createdAt)}</span>
                </div>
              ))}
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "white",
                borderRadius: 10,
                py: 3,
                px: { md: 8, xs: 4 },
              }}
              className="chat-send"
            >
              {/* <div>+</div> */}
              {/* <InputEmoji
                      value={newMessage}
                      onChange={handleOnChange}
                      // cleanOnEnter
                      // onEnter={handleOnEnter}
                      // placeholder="Type a message"
                    /> */}
              <form
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: 10,
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  name="message"
                  value={newMessage.message}
                  onChange={handleChange}
                  InputProps={{
                    sx: {
                      borderRadius: "50px",
                      py: -5,
                      mx: 2,
                      mb: 0,
                    },
                  }}
                />

                <Button variant="contained" type="submit">
                  Send
                </Button>
              </form>
            </Box>
          </>
        ) : (
          <Typography variant="h4" mt={10} textAlign={"center"}>
            Tap on a Chat to Start Converstaion
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChatBox;
