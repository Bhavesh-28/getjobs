import React, { useState, useEffect } from "react";
import { Container, useMediaQuery, Grow } from "@mui/material";
import image1 from "./../typing_job.jpg";
import image2 from "./../transcriptionist_job.jpg";
import "./../styles/common.css";

export default function Home() {
  const boxes = useMediaQuery("(max-width: 600px)")
  const screen = useMediaQuery("(max-width: 900px)");
  const flex = useMediaQuery("(max-width: 1200px)");
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    setchecked(true);
  }, [checked]);

  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          height: "20%",
          width: screen ? "100vw" : "auto",
        }}
      >
        <h1 style={{ fontSize: "8.5vw", lineHeight: "2rem", color: "#25f100" }}>
          Welcome, user
        </h1>
        <p style={{ fontSize: "2vw", color: "#25f100" }}>
          Below are the two types of jobs we provide select the one which gives
          you the most comfort and get started!!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: flex? 'column': 'row',
          justifyContent: "space-evenly",
          gap: "1rem",
          alignItems: "center",
          margin: "0 auto",
          height: "auto",
          width: "auto",
          padding: "2.5vh 0",
        }}
      >
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <div
            id="typingJOB"
            style={{
              height: boxes? "70vw": "50vh",
              width: boxes? '70vw' : '30rem',
              overflow: "hidden",
              borderRadius: "1rem",
            }}
            onClick={() => window.location.href = 'http://localhost:3000/get-typing-jobs'}
          >
            <div
              id="image"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                height: boxes? "70vw": "50vh",
                width: boxes? '70vw' : '30rem',
                transitionDuration: ".8s",
                borderRadius: "1rem",
              }}
            ></div>
            <div style={{ marginTop: "-8rem" , padding: '0 2vw', color: '#000'}}>
              <h1 style={{fontSize: boxes? '10vw': '3.5rem' , fontFamily: "cursive" , color: '#25f100' , textShadow: "1px 0px 7px rgba(150, 150, 150, 0.68)"}}>{"Typing >"}</h1>
            </div>
          </div>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <div
            id="transcriptionJOB"
            style={{
              height: boxes? "70vw": "50vh",
              width: boxes? '70vw' : '30rem',
              overflow: "hidden",
              borderRadius: "1rem",
            }}
            onClick={() => window.location.href = 'http://localhost:3000/get-transcription-jobs'}
          >
            <div
              id="image"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                height: boxes? "70vw": "50vh",
                width: boxes? '70vw' : '30rem',
                transitionDuration: ".8s",
                borderRadius: "1rem",
              }}
            />
            <div style={{ marginTop: "-5rem" , padding: '0 2vw', color: '#000'}}>
              <h1 style={{fontSize: boxes? '5vw': '2rem' , fontFamily: "cursive" , color: '#25f100'}}>{"Transcriptionist >"}</h1>
            </div>
          </div>
        </Grow>
      </div>
    </Container>
  );
}
