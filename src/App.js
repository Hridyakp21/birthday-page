import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "./App.css";

function App() {

  const [showSurprise, setShowSurprise] = useState(false);

  const photos = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg"
  ];

  return (
    <div className="container">

      {showSurprise && <Confetti />}

      <div className="card">

        <h1>🎂 Happy Birthday 🎂</h1>

        <p>
🎉 Hey Adeeba!

Today is your special day 🎂 and I’m so happy to be a part of it.
The day you were born truly feels like the day an angel entered the lives of everyone around you ✨.

You are such a confident, bold, and beautiful soul 💖.
Your kindness, strength, and smile make the world a brighter place for the people who know you.

May your life always be filled with showers of blessings, happiness, and endless love 🌸.
I thank God for blessing me with such a wonderful sister at the age of 23 🫶.

Wishing you a day full of love, laughter, sweet surprises, and beautiful memories 🎁🎈.
May this year bring you success, joy, and everything your heart wishes for ✨.

🎂 Happy Birthday once again, Adeeba! 💕

        </p>

        {!showSurprise && (
          <button
            className="surpriseBtn"
            onClick={() => setShowSurprise(true)}
          >
            Click for the Surprise 🎁
          </button>
        )}

        {showSurprise && (
          <>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="message"
            >
              💖 Some Beautiful Memories 💖
            </motion.h2>

            <div className="gallery">

              {photos.map((photo, index) => (
                <motion.img
                  key={index}
                  src={photo}
                  className="photo"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.7 }}
                />
              ))}

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default App;