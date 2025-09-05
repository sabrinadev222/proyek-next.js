"use client";
import { motion } from "framer-motion";

export default function About() {
  const faqs = [
    { q: "Siapa aku?", a: "Sabrina Vivia Hilwana, lahir pada 20 April 2009." },
    { q: "Apa hobiku?", a: "Menyanyi, memasak." },
    { q: "Warna favoritku?", a: "Biru, ungu, putih, dan pink." },
    { q: "Hal yang aku suka?", a: "Matcha, musik, azzam." },
    { q: "Hal yang aku tidak suka?", a: "Dicuekin, cicak dan sejenisnya." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "40px 20px",
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "darkblue", 
          marginBottom: 40,
          fontSize: "2rem",
          
        }}
      >
        About Me
      </h1>

      <div style={{ display: "grid", gap: 20 }}>
        {faqs.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#9ae0e9ff",
              borderLeft: "4px solid blue",
              padding: "16px 20px",
              borderRadius: 8,
              boxShadow: "0 0 10px #00f, 0 0 20px #0ff",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0", color: "darkblue" }}>{item.q}</h3>
            <p style={{ margin: 0, color: "#8d4e6dff" }}>{item.a}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
