import React , {useState} from "react";
import { Container, useMediaQuery, Button } from "@mui/material";
import "./../styles/common.css";
import validator from 'validator';

export default function TranscriptionJob() {
  const screen = useMediaQuery("(max-width: 900px)");
  const mp = screen ? "2rem 0" : "2rem 2rem";

  const [Registered, setRegistered] = useState(true);
  const [Error, setError] = useState(false)
  const [Email, setEmail] = useState('')

  const handleSubmit = () => {
    const TheEmail = validator.isEmail(`${Email}`)
    if(TheEmail === true) setRegistered(false)
    if(TheEmail === false) setError(true)
  }

  return (
    <Container
      style={{
        margin: mp,
        padding: "1rem",
        Left: "0",
        width: screen ? "100vw" : "70vw",
        backgroundColor: "#e6e8e6",
        borderRadius: screen ? "0" : "1.5rem",
      }}
    >
      <h4 id="heading">
        Welcome Transcriptionist, searching for a job? But haven't got it yet.
        Well you have came on the right page for it here we would provide you
        with the typing job you've dreamed of with 0 registration fee.
      </h4>
      <h4 id="heading">We have Demystified some information below:</h4>
      <ol>
        <li>The registration fee for this job is 0 for beginners</li>
        <li>
          You don't have to provide any crucial infromation like your credit
          card number or anything like that
        </li>
        <li>
          This is job is done in simple three steps which would be told you
          later
        </li>
        <li>
          The maximum amount you could be making a single day will be near about
          100$
        </li>
        <li>
          We would be giving you simple audio files and you have to just listen
          carefully and type them down in Microsoft Word and submit it on the
          DashBoard
        </li>
        <li>Each Audio file length would be ranged from 2 to 10 minutes</li>
      </ol>

      <h4 id="heading">Here's how the price would be ranged:</h4>
      <ol>
        <li>0.15$ for 2 audio files</li>
        <li>1.20$ for 10 audio files</li>
        <li>7$ for 50 audio files</li>
      </ol>

      <h4 id="heading">
        The money would be collected in the your profile account and would be
        visible in the dashBoard
      </h4>
      <h4 id="heading">
        You would be able to widraw it after having 5$ or more than that
      </h4>

      <h2 id="heading">Found this Job helpful?</h2>

      {Registered ? (
        <>
          <input
            id="email"
            type={"email"}
            placeholder="your working email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />{" "}
          <Button onClick={handleSubmit}>Register</Button>
          <br />
          {Error ? <p style={{ color: "red" }}>No such email exists</p> : null}
        </>
      ) : (
        <>
          <h4 style={{ color: "green" }}>Registered successfully!</h4> Response
          email would be arriving any time by now
        </>
      )}
    </Container>
  );
}
