# Portfolio Web App - Technical Specifications (spec.md)

## 1. Mimari & Teknoloji Yığını
*   **Framework:** Next.js 14+ (App Router) - SEO ve hızlı sayfa yüklemeleri (SSR/SSG) için.
*   **Stil/UI:** Tailwind CSS - Hızlı ve optimize edilmiş inline stil yönetimi.
*   **Animasyon:** Framer Motion - Sayfa geçişleri, scroll reveal ve hover efektleri için.
*   **Veri Yönetimi / CMS:** Lokal `.mdx` dosyaları veya Sanity.io (İçerikleri ve galeri görsellerini kodu değiştirmeden yönetmek için).
*   **Görsel Optimizasyonu:** `next/image` (Otomatik WebP dönüşümü, lazy loading, blur-up placeholder).
*   **Deployment:** Vercel (Next.js için en optimize ve CI/CD süreçleri otomatik ortam).

## 2. Temel Özellikler (Core Features)
*   **Dinamik Galeri (Masonry Grid):** Farklı en-boy oranlarına sahip görsellerin boşluksuz, Pinterest vari bir grid yapısında listelenmesi.
*   **Görsel Lightbox (Modal):** Galeri öğelerine tıklandığında ekranı kaplayan, klavye (ok tuşları/Esc) ve swipe destekli yüksek çözünürlüklü inceleme modu.
*   **Filtreleme Sistemi:** "Tümü, Web, Mobil, UI/UX, Donanım" gibi kategorilerle galeriyi client-side (sayfa yenilenmeden) filtreleme.
*   **Hakkımda Sayfası/Bölümü:** Yetenek seti (Skiller), deneyim zaman çizelgesi ve indirilebilir CV (PDF) butonu.
*   **İletişim:** Formspree veya Next.js Server Actions destekli, spam korumalı (reCAPTCHA) basit iletişim formu.

## 3. Performans ve Optimizasyon Kriterleri
*   **Lighthouse Hedefi:** Performance, Accessibility, Best Practices ve SEO için 95+ skor.
*   **Bundle Size:** Gereksiz kütüphane kullanımından kaçınılacak (örn: ağır slider kütüphaneleri yerine custom Framer Motion çözümleri).
*   **Caching:** Değişmeyen portföy verileri statik olarak (SSG) derlenecek, sadece iletişim formu dinamik çalışacak.