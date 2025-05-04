import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="invitation-container">
      {/* Door Animation */}
      <motion.div
        className="door left-door"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="door right-door"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>

      {/* Invitation Details */}
      <motion.div
        className="invitation-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-yellow-200 mb-2 calligraphy-font
"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Valima Invitation
        </motion.h1>

        <p className="text-yellow-100 text-3xl mb-6">
          بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-yellow-100 mb-2">
          We cordially invite you to the blessed occasion of the{" "}
          <span className="font-semibold">Walima</span> of
        </p>

        <motion.h2
          className="calligraphy-font"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
        >
          Syed Tanzeem Ahmed
        </motion.h2>

        <motion.div
          className="calligraphy-font"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          &amp;
        </motion.div>

        <motion.h2
          className="calligraphy-font"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1.5 }}
        >
          Saltanath Muskan
        </motion.h2>

        <motion.div
          className="text-yellow-100 text-lg mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          <p className="text-xl font-semibold text-yellow-200">
            Insha'Allah on 31st August 2025, 7:00 PM
          </p>
        </motion.div>

        <motion.div
          className="venue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <p>
            <span className="font-semibold">Venue:</span> AMC Palace, BG Road,
            Bangalore
          </p>
        </motion.div>

        <p className="text-yellow-200 text-sm mb-2 italic">
          "And among His signs is that He created for you spouses from among
          yourselves so that you may find tranquility in them, and He placed
          between you affection and mercy."
          <br />
          — Surah Ar-Rum (30:21)
        </p>

        <p className="text-yellow-100 text-sm mb-2">
          We request the honor of your presence and blessings
        </p>
      </motion.div>
    </div>
  );
}
