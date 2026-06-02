# SportBase 🏆

SportBase adalah aplikasi web interaktif yang menyajikan berbagai informasi seputar olahraga, dilengkapi dengan fitur kuis dan arena khusus (GOAT Arena). Proyek ini dibangun menggunakan modern web stack untuk memberikan performa yang cepat dan antarmuka yang responsif.

## Fitur Utama ✨
- **Beranda (Home):** Halaman sambutan dan pengenalan aplikasi.
- **Eksplorasi Olahraga (Explorer & Sport Detail):** Katalog untuk mencari dan mempelajari detail berbagai macam olahraga.
- **Kuis (Quiz):** Uji pengetahuan olahraga Anda dengan kuis interaktif yang seru.
- **GOAT Arena:** Halaman eksklusif yang didedikasikan untuk menampilkan atlet-atlet terbaik sepanjang masa (*Greatest of All Time*).

## Teknologi yang Digunakan 💻
- **[React](https://reactjs.org/)** - Library JavaScript untuk membangun UI.
- **[Vite](https://vitejs.dev/)** - Frontend tooling yang sangat cepat.
- **[Tailwind CSS](https://tailwindcss.com/)** - *Utility-first* CSS framework untuk styling halaman.

## Struktur Direktori 📂
```text
SportBase/
├── src/
│   ├── components/  # Komponen UI (Navbar, Footer, dll)
│   ├── data/        # Data statis (quizData.js, sportsData.js)
│   ├── views/       # Halaman utama aplikasi (Home, Explorer, Quiz, GOAT Arena)
│   ├── App.jsx      # Root component React
│   ├── index.css    # File CSS utama
│   └── main.jsx     # Entry point aplikasi
├── index.html       # Template utama HTML
├── package.json     # Konfigurasi dependencies project
├── tailwind.config.js # Pengaturan styling Tailwind
└── vite.config.js   # Konfigurasi environment Vite
```

## Cara Menjalankan Proyek 🚀

Ikuti panduan berikut untuk menjalankan proyek ini di *local machine* Anda:

1. **Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/)**.

2. **Instal seluruh dependencies:**
   Buka terminal di dalam folder proyek ini lalu jalankan:
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di Browser:**
   Buka URL yang disediakan oleh Vite di terminal Anda (biasanya `http://localhost:5173`).

---
Dibuat dengan ❤️ untuk para pecinta olahraga.