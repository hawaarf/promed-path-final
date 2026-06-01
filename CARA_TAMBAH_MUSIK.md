# Cara Menambahkan File Musik ke Website

## Langkah 1: Siapkan File Musik Anda
Pastikan file musik Anda dalam format **MP3**, **WAV**, atau **OGG**.
Disarankan menggunakan format MP3 untuk kompatibilitas terbaik.

Nama file yang disarankan: `promed-jingle.mp3`

## Langkah 2: Letakkan File Musik
Letakkan file musik Anda di folder:
```
/workspaces/default/code/src/imports/promed-jingle.mp3
```

## Langkah 3: Update Kode

### A. Buka file: `/workspaces/default/code/src/imports/pasted_text/studios-data.ts`

### B. Cari baris sekitar baris ke-5, hapus tanda `//` di depan baris import:

**SEBELUM:**
```typescript
// import promedJingle from '../promed-jingle.mp3';
```

**SESUDAH:**
```typescript
import promedJingle from '../promed-jingle.mp3';
```

### C. Scroll ke bawah, cari baris dengan `<BackgroundMusic audioSrc=`, ganti menjadi:

**SEBELUM:**
```typescript
<BackgroundMusic audioSrc="/path/to/your/music.mp3" />
```

**SESUDAH:**
```typescript
<BackgroundMusic audioSrc={promedJingle} />
```

## Langkah 4: Cek Hasilnya
- Refresh halaman website
- Musik akan otomatis mencoba autoplay (tergantung kebijakan browser)
- Klik tombol musik di kanan bawah untuk play/mute
- Tombol akan **berubah bentuk** dari bulat menjadi kotak rounded dengan rotasi saat musik diputar

## Catatan
- Jika musik tidak autoplay, itu normal karena kebijakan browser modern
- User harus klik tombol musik untuk memulai
- Musik akan loop otomatis saat selesai
- Tombol musik akan berubah bentuk ketika musik sedang diputar (animasi rotate dan perubahan ukuran)
