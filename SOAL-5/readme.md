# Aplikasi Pencatatan Aset PT. ABC

## Deskripsi

Aplikasi ini dirancang untuk membantu PT. ABC dalam mencatat aset perusahaan, baik berupa barang elektronik maupun alat tulis kantor (ATK). Dengan aplikasi ini, proses pencatatan aset dapat dilakukan secara otomatis dan lebih efisien, mengurangi kesalahan manual dan meningkatkan transparansi.

## Flow Program Sederhana

1. **Start**: Memulai proses pencatatan aset.
2. **Input Aset**: Pengguna memasukkan detail aset melalui form input. Detail yang dimasukkan mencakup:

   - Nama Aset
   - Jenis Aset
   - Qty
   - Type
   - Nilai Aset

3. **Persetujuan**: Proses untuk menyetujui atau menolak pencatatan aset. Proses ini melibatkan pengecekan oleh pihak yang berwenang. Terdapat dua kemungkinan hasil:

   - **Disetujui**:
     - Aset disimpan ke dalam database.
     - Proses selesai.
   - **Ditolak**:
     - Aset ditandai sebagai ditolak dan tidak disimpan ke dalam database.
     - Proses selesai.

4. **End**: Mengakhiri proses pencatatan aset.
