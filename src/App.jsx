import React from "react";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="invitation-container">
      {/* Floating Flowers Animation */}
      <motion.div
        className="floating-flowers"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200 text-2xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            transition={{ duration: 15 + Math.random() * 5, delay: i * 0.5 }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            🌸
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="invitation-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <motion.h1
          className="text-3xl font-bold text-yellow-200 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
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
          className="text-4xl font-semibold text-yellow-300 mb-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 3 }}
        >
          Syed Tanzeem Ahmed
        </motion.h2>

        <motion.div
          className="text-yellow-100 text-xl mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
        >
          &amp;
        </motion.div>

        <motion.h2
          className="text-4xl font-semibold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 3 }}
        >
          Muskan
        </motion.h2>

        <motion.div
          className="text-yellow-100 text-lg mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 2 }}
        >
          <p className="text-xl font-semibold text-yellow-200">
            Insha'Allah on 31st August 2025, 7:00 PM
          </p>
        </motion.div>

        <motion.div
          className="venue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 2 }}
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
