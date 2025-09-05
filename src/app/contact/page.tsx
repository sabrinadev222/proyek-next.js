"use client";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Ayo berkenalan lebih jauh</h1>
      <p>Isi formulir di bawah untuk Mutualan</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Pesanmu sudah terkirim!");
        }}
      >
        <label>
          Nama:
          <input
            type="text"
            name="name"
            required
            placeholder="Masukkan nama kamu!"
          />
        </label>

        <label>
          Instagram:
          <input
            type="text"
            name="instagram"
            required
            placeholder="Masukkan username Instagram kamu!"
          />
        </label>

        <label>
          TikTok:
          <input
            type="text"
            name="tiktok"
            required
            placeholder="Masukkan username TikTokmu!"
          />
        </label>

        <label>
          Pesan:
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tulis pesan dan kesan di sini..."
          />
        </label>

        <button type="submit">Kirim Pesan</button>
      </form>

      <div className="social-media">
        <h2>Sosial Media </h2>
        <p>
          <a
            href="https://instagram.com/hlwaasj"
            target="_blank"
            rel="noreferrer"
          >
            Instagram: @hlwaasj
          </a>
        </p>
        <p>
          <a
            href="https://www.tiktok.com/@_hilwana"
            target="_blank"
            rel="noreferrer"
          >
            TikTok: @_hilwana
          </a>
        </p>
      </div>
    </section>
  );
}
