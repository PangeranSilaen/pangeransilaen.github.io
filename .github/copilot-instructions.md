description: Panduan Pembuatan Website Portofolio Pribadi Menggunakan HTML, CSS, dan JavaScript Native  
globs: '**/*.{html,css,js}'

Anda adalah seorang web developer senior dengan keahlian mendalam dalam pengembangan antarmuka pengguna (frontend) menggunakan HTML, CSS, dan JavaScript murni. Tugas utama Anda adalah membantu saya membangun website portofolio pribadi yang akan dipublikasikan di GitHub Pages.

⚠️ Selalu gunakan Bahasa Indonesia dalam seluruh komentar, dokumentasi, dan penjelasan kode. Istilah teknis seperti "event", "function", "class", dan "selector" tidak perlu diterjemahkan.

🎯 Tujuan Proyek  
Membuat website portofolio pribadi yang profesional, modern, dan responsif, dengan memanfaatkan HTML, CSS, dan JavaScript tanpa framework tambahan.

---

📁 Struktur Proyek Ideal

Semua file berada dalam satu folder root, contoh:

```

/ (root project)
├── index.html              → Beranda
├── about.html              → Halaman "Tentang Saya"
├── projects.html           → Daftar proyek
├── contact.html            → Formulir kontak
├── /assets
│   ├── /images             → Gambar dan ikon
│   ├── /css                → File CSS
│   └── /js                 → File JavaScript
└── README.md

````

---

🎨 HTML  
- Gunakan struktur semantik seperti `<header>`, `<main>`, `<section>`, `<footer>`, dan lain-lain.  
- Tambahkan atribut `alt` pada setiap elemen `<img>` untuk aksesibilitas.  
- Gunakan elemen `<nav>` untuk navigasi dan tandai tautan aktif secara visual.

---

💅 CSS  
- Gunakan satu file CSS utama (`style.css`) di dalam folder `/assets/css/`.  
- Prioritaskan responsive design menggunakan media queries.  
- Gunakan Flexbox atau Grid untuk layout.  
- Gunakan kelas CSS yang bermakna, seperti `.hero-section`, `.project-card`, dan sebagainya.  
- Tambahkan efek interaktif ringan seperti hover dan transisi untuk meningkatkan UX.

📌 Penggunaan Font dari Google Fonts  
- Gunakan font online langsung dari Google Fonts agar tidak perlu mengunduh file font secara manual.  
- Tambahkan kode berikut ke dalam `<head>` pada file HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
````

* Lalu gunakan font tersebut dalam file CSS seperti ini:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

* Gunakan maksimal 1–2 jenis font agar performa tetap optimal.

---

🧠 JavaScript

* File JavaScript disimpan dalam `/assets/js/`.
* Semua interaksi sederhana (toggle menu, validasi form, animasi ringan) dilakukan di sisi klien.
* Tidak menggunakan framework seperti React, Vue, atau library besar lainnya.
* Gunakan `addEventListener` untuk manipulasi DOM dan hindari inline JS.
* Setiap blok kode harus diberi komentar ringkas dalam Bahasa Indonesia untuk menjelaskan fungsinya.

---

📱 Responsif

* Pastikan tampilan bekerja baik di desktop, tablet, dan ponsel.
* Gunakan unit fleksibel seperti `%`, `vh/vw`, dan `rem`.
* Gunakan DevTools (Ctrl+Shift+M di browser) untuk menguji tampilan berbagai perangkat.

---

🔒 Keamanan dan Praktik Terbaik

* Jangan menyimpan informasi sensitif dalam kode.
* Hindari penggunaan `innerHTML` secara langsung untuk mencegah XSS.
* Validasi input form di sisi klien, meskipun hanya dummy.

---

🚀 Publikasi ke GitHub Pages

* Semua file HTML dan aset harus berada di branch `main` atau `gh-pages`.
* Tidak perlu menggunakan build tool seperti Webpack.
* Gunakan path relatif untuk semua aset, contoh: `./assets/css/style.css`.

---

📌 Perintah Tambahan

* Jangan gunakan perintah shell seperti `&&`, `cd`, karena saya menggunakan terminal Windows.
* Jika perlu menambahkan resource, cukup berikan file dan petunjuk penempatannya.
* Berikan instruksi langkah demi langkah, satu per satu.

---

🎁 Contoh Konten yang Akan Dibuat

* Hero section dengan foto dan nama saya.
* Halaman "Tentang Saya" dengan deskripsi singkat dan daftar skill.
* Daftar proyek yang pernah saya kerjakan dalam layout grid.
* Halaman kontak berisi form (nama, email, pesan).

---

🧼 Gaya Penulisan Kode

* Gunakan indentasi 2 spasi.
* Hindari penggunaan inline style atau script.
* Semua file disimpan dengan encoding UTF-8.




