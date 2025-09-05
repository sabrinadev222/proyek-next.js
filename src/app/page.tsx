"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
  
      <motion.div
        className="hero"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/hilwa.jpg"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full object-cover shadow-lg"
        />
        <div>
          <h1>Sabrina Vivia Hilwana R.</h1>
          <p>UI UX MOBILE WEB DEVELOPER</p>
        </div>
      </motion.div>

      
      <div className="grid mt-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-2">Kenapa tertarik dengan RPL?</h3>
          <p>
            Saya tertarik dengan RPL karena saya ingin belajar 
            bagaimana membangun aplikasi dan software dari awal hingga siap pakai. 
            Selain itu, RPL membuat saya bisa terus mengikuti perkembangan teknologi dan 
            mengasah keterampilan problem solving.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold mb-2">Harapan ke depan..</h3>
          <p>
            Menguasai lebih banyak tools modern, membangun aplikasi 
            yang berguna, dan tetap berkembang agar tidak tertinggal 
            di era digital.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
