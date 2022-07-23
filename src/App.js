import React from "react";
import Navbar from "./components/Partials/Navbar";
import Footer from "./components/Partials/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TypingJob from "./components/Typing_jobs";
import TranscriptionJob from "./components/Transcription_jobs";
import { Routes, Route } from "react-router-dom";
import image from './backgroundImage.jpg';

function App() {
  return (
      <div className="App" style={{ overflow: 'hidden' , backgroundImage: `url(${image})` , backgroundPosition: "center" , backgroundRepeat: "no-repeat" , backgroundSize: "cover"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/get-typing-jobs" element={<TypingJob/>}/>
          <Route path="/get-transcription-jobs" element={<TranscriptionJob/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
