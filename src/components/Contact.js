import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  Container,
  TextareaAutosize,
  useMediaQuery,
  Button,
} from "@mui/material";

export default function Contact() {
  const [sold, setsold] = useState(false);
  const [message, setMessage] = useState("");
  const [error, seterror] = useState(false);
  const screen = useMediaQuery("(max-width: 400px)");
  const mp = screen ? "2rem 0" : "2rem auto";

  const SubmitMessage = () => {
    if (message.length < 100) seterror(true);
    else {
      setMessage("");
      setsold(true);
    }
  };
  return (
    <>
      <Container style={{ margin: mp, padding: mp }}>
        <div
          style={{
            textAlign: "center",
            height: "20%",
            width: screen ? "100vw" : "auto",
          }}
        >
          <h1
            style={{ fontSize: "8.5vw", lineHeight: "2rem", color: "#25f100" }}
          >
            Contact Us!
          </h1>
          <p style={{ fontSize: "2vw", color: "#25f100" }}>Get in touch</p>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "80%",
            width: screen ? "100vw" : "auto",
            margin: "2rem 0 1rem 0",
          }}
        >
          <TextareaAutosize
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type the message here!"
            style={{
              height: "60vh",
              width: "75vw",
              borderRadius: "1.5rem",
              padding: "1rem",
            }}
          />
          <br />
          {sold ? (
            <>
              <h5 style={{ lineHeight: "2rem", color: "#25f100" }}>
                Message sent succesfully!
              </h5>
            </>
          ) : (
            <>
              {error ? (
                <h5 style={{ lineHeight: "1.5rem", fontSize: '1.5rem' , color: "#ff0000" , fontFamily: "cursive"}}>
                  Message should at least contain 100 words
                </h5>
              ) : null}
              <Button
                variant="contained"
                onClick={SubmitMessage}
                style={{ margniTop: ".5rem", backgroundColor: "#25f100" }}
              >
                <FiSend style={{ marginRight: ".5rem" }} />
                Send
              </Button>
            </>
          )}
        </div>
      </Container>
    </>
  );
}
