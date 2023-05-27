import React, { useEffect, useState } from "react";
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
import InputEmoji from "react-input-emoji";
import { fetchMessages } from "../../api/MessageRequest";
import "./ChatBox.css";
import SendIcon from "@mui/icons-material/Send";

const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");
  //   const [newMessage, setNewMessage] = useState("");

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMessage((prevnewMessage) => ({
      ...prevnewMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the submitted data
    // console.log("Submitted data:", newMessage);
    // Reset the form
    console.log(newMessage?.message);
    setNewMessage({
      message: "",
    });
  };

  return (
    <>
      <Box sx={{}} className="ChatBox-container">
        {chat ? (
          <>
            <Paper
              elevation={5}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1 }}
            >
              <Avatar
                src={userData?.profileImg}
                alt="Profile"
                sx={{ width: "50px", height: "50px" }}
              />
              <h6>{userData?.name}</h6>
            </Paper>
            <div className="chat-body">
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
            </div>
            <div className="chat-sende">
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
                  //   fullWidth

                  InputProps={{
                    sx: {
                      borderRadius: "50px",
                      py: -5,
                      mx: 2,
                      width: "50vw",
                      mb: 0,
                    },
                  }}
                />

                <Button variant="contained" type="submit">
                  Send
                </Button>
              </form>
            </div>
          </>
        ) : (
          <Typography variant="h5" textAlign={'center'} my={'auto'}>Tap on a Chat to Start Converstaion</Typography>
        )}
      </Box>
    </>
  );
};

export default ChatBox;
