import React, { useState } from "react";
import { useMediaQuery, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaKeyboard , FaHome } from 'react-icons/fa';
import { IoMdHeadset } from 'react-icons/io';
import { GrContact } from 'react-icons/gr';


export default function Navbar() {
  let screen = useMediaQuery("(max-width: 1000px)");
  return <div style={{position: 'static' , top: '0'}}>{screen ? <Mobile /> : <Desktop />}</div>;
}

function Desktop() {
  return (
    <div style={{ display: 'flex' ,  justifyContent: 'space-around', backgroundColor: '#25f45f' , width: "100vw" , color: 'white'}}>
      <h1>Gets Jobs Online</h1>
      <ul style={{display: 'flex' , justifyContent: 'space-around', alignItems: 'center' , listStyle: "none" , width: '60%'}}>
        <li>
          <Link style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} to="/get-typing-jobs">Typing Jobs</Link>
        </li>
        <li>
          <Link style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} to="/get-transcription-jobs">Transcription Jobs</Link>
        </li>
        <li>
          <Link style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

function Mobile() {
  const [Open, setOpen] = useState(false);
  return (
    <div style={{display: 'flex' , alignItems: "center" , textAlign: 'left', gap: '1vw', width: "100vw", backgroundColor: '#25f45f', color: 'white' , padding: "0 2vw"}}>
      <FaBars onClick={() => setOpen(true)} style={{ fontSize: '2rem' , marginRight: '1vw'}}/>
      <h1>Gets Jobs Online</h1>
      <Drawer open={Open} onClose={() => setOpen(false)} PaperProps={{sx: {backgroundColor: "#25f45f" , width: "15rem"}}}>
        <AiOutlineClose onClick={() => setOpen(false)} style={{display: 'flex' , flexDirection: 'column' , justifyContent: 'space-between' , texAign: 'left' , color: 'white' , fontSize: "1.5rem" , margin: '1vh 0 0 1vw'}} paperProps={{ backgroundColor: '#25f45f' , color: 'white'}}/>
        <div >
          <ul style={{ listStyle: 'none'}}>
            <li style={{marginBottom: '.6rem'}}>
              <Link to="/" style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} onClick={() => setOpen(false)}>Home  <FaHome/></Link>
            </li>
            <li style={{marginBottom: '.6rem'}}>
              <Link to="/get-typing-jobs" style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} onClick={() => setOpen(false)}>Typing Jobs <FaKeyboard/></Link>
            </li>
            <li style={{marginBottom: '.6rem'}}>
              <Link to="/get-transcription-jobs" style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} onClick={() => setOpen(false)}>Transcription Jobs <IoMdHeadset/></Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white' , textDecoration: 'none' , fontWeight: 650}} onClick={() => setOpen(false)}>Contact <GrContact style={{color: 'white'}}/></Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
