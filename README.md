# Anime Fortune CLI

Anime Fortune CLI adalah utilitas command-line sederhana yang mencetak kutipan anime acak menggunakan `cowsay`. Proyek ini juga bertujuan sebagai latihan dalam penggunaan **TypeScript** dan **commander.js** untuk membangun aplikasi CLI.

## 📌 Fitur
- Menampilkan kutipan anime secara acak.
- Menggunakan `cowsay` untuk membuat tampilan lebih menarik.
- Dibangun dengan `commander.js` untuk manajemen CLI.
- Cocok untuk pembelajaran dasar TypeScript dan pengelolaan argumen CLI.

## 🛠️ Instalasi
Pastikan kamu sudah menginstal **Node.js** dan **cowsay** terlebih dahulu:

```sh
sudo pacman -S cowsay
sudo pacman -S nodejs
sudo pacman -S npm
```

Lalu, klon repositori ini dan instal dependensinya:

```sh
git clone <repository-url>
cd anime-fortune
npm install
```

## 🚀 Penggunaan
Jalankan perintah berikut untuk mendapatkan kutipan anime acak:

```sh
node index.js --random
```

Atau dengan opsi shorthand:

```sh
node index.js -r
```

📌 **Contoh Output:**
```sh
 ------------------------------------------------------------------------------------------
< "Fear is not evil. It tells you what your weakness is. And once you know your weakness,
   you can become stronger as well as kinder." - Fairy Tail >
 ----------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## 🎓 Pembelajaran
Proyek ini dibuat untuk belajar **TypeScript** dan **commander.js**, seperti:
- Mengelola argumen dalam aplikasi CLI dengan **commander.js**.
- Menampilkan output dengan format yang menarik menggunakan **cowsay**.
- Menulis kode yang lebih terstruktur dengan TypeScript.

## 📜 Lisensi
Proyek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.

## 🤝 Kontribusi
Jika kamu ingin berkontribusi, silakan buat pull request atau laporkan masalah melalui **Issues**.

---
Happy coding! 🚀

