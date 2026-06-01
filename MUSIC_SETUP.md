# Panduan Setup Background Music

## Fitur yang Telah Ditambahkan

✅ Background music dengan autoplay
✅ Tombol kontrol floating di kanan bawah untuk mute/unmute
✅ Loop otomatis saat musik selesai
✅ Icon beranimasi saat musik diputar

## Cara Menggunakan

### 1. Siapkan File Musik

Letakkan file musik Anda (format: MP3, WAV, OGG) di folder:
```
/workspaces/default/code/src/imports/
```

Misalnya:
```
/workspaces/default/code/src/imports/background-music.mp3
```

### 2. Update Path Musik

Buka file: `/workspaces/default/code/src/imports/pasted_text/studios-data.ts`

Cari baris:
```tsx
<BackgroundMusic audioSrc="/path/to/your/music.mp3" />
```

Ganti dengan:
```tsx
<BackgroundMusic audioSrc={require('../background-music.mp3')} />
```

Atau jika menggunakan import:
```tsx
// Di bagian atas file, tambahkan:
import backgroundMusic from '../background-music.mp3';

// Lalu gunakan:
<BackgroundMusic audioSrc={backgroundMusic} />
```

### 3. Alternatif: Gunakan URL Eksternal

Jika musik Anda tersimpan online:
```tsx
<BackgroundMusic audioSrc="https://example.com/music.mp3" />
```

## Catatan Penting

⚠️ **Browser Autoplay Policy**: 
- Browser modern memblokir autoplay dengan suara
- Jika autoplay gagal, user perlu klik tombol musik untuk memulai
- Ini adalah kebijakan keamanan browser yang tidak bisa dilewati

🎵 **Rekomendasi File Musik**:
- Format: MP3 (kompatibilitas terbaik)
- Ukuran: < 5MB untuk loading cepat
- Jenis: Musik instrumental/ambient agar tidak mengganggu
- Volume: Sudah di-normalize (tidak terlalu keras)

## Kontrol Musik

Tombol floating di kanan bawah:
- **Icon Speaker dengan gelombang**: Musik sedang diputar
- **Icon Speaker dengan X**: Musik dimute/belum diputar
- Klik untuk toggle mute/unmute atau start musik

## Troubleshooting

**Musik tidak autoplay?**
- Normal! User harus klik tombol musik untuk memulai
- Ini adalah kebijakan browser untuk pengalaman user yang lebih baik

**File musik tidak ditemukan?**
- Pastikan path file benar
- Cek console browser untuk error messages
- Pastikan format file didukung (MP3, WAV, OGG)

**Musik terputus-putus?**
- File terlalu besar, coba kompres
- Gunakan format MP3 dengan bitrate 128kbps
