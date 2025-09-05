"use client";
import { projects } from "@/app/data/project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2
  style={{
    textAlign: "center",
    fontSize: "2rem",
    color: "#a020f0", 
    textShadow: "0 0 5px #a020f0, 0 0 10px #d870ff, 0 0 20px #ff00ff", // ✨ efek neon ungu-pink
    marginBottom: "24px",
  }}
>
  Proyek
</h2>

      
      <div className="grid" style={{ marginTop: 16 }}>
        {projects.map((p) => (
          <div key={p.name} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="btns">
              {p.github && (
                <a
                  className="btn"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {p.Deploy && (
                <a
                  className="btn"
                  href={p.Deploy}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
