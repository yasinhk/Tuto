# Portfolio Web App - Design Specifications (design.md)

## 1. Tasarım Dili ve Konsept
*   **Konsept:** Modern, Minimalist, "Dark Mode" öncelikli (Görsellerin ve projelerin renklerini ön plana çıkarmak için siyah/koyu gri arka planlar).
*   **Hissiyat:** Akıcı, profesyonel, teknolojik ve temiz (Clean UI).
*   **Grid Sistemi:** 12-kolonlu esnek grid. Galeri için 3 veya 4 kolonlu asimetrik yerleşim.

## 2. Renk Paleti (Color Scheme)
*   **Background (Primary):** `#09090B` (Derin Siyah/Zink)
*   **Surface/Cards (Secondary):** `#18181B` (Koyu Gri - kartlar ve hover durumları için)
*   **Text (Primary):** `#FAFAFA` (Kırık Beyaz - yüksek okunabilirlik)
*   **Text (Muted):** `#A1A1AA` (Açık Gri - açıklamalar ve alt başlıklar)
*   **Accent (Vurgu Renk):** `#3B82F6` (Neon Mavi) veya `#10B981` (Zümrüt Yeşili) - Sadece önemli butonlar, linkler ve aktif filtre sekmeleri için.

## 3. Tipografi
*   **Heading Font:** *Clash Display* veya *Playfair Display* (Büyük, cesur, karakterli başlıklar).
*   **Body Font:** *Inter* veya *Geist Sans* (Okunabilirliği yüksek, nötr sans-serif).
*   **Hiyerarşi:** 
    *   H1: Hero başlığı, çok büyük (örn: 4rem+), font-weight: 700.
    *   H2: Bölüm başlıkları (Galeri, Hakkımda), font-weight: 600.
    *   Body: 1rem (16px), line-height: 1.6.

## 4. Etkileşim ve Animasyonlar (Micro-interactions)
*   **Hero Section:** Sayfa ilk açıldığında isminin ve ünvanının aşağıdan yukarıya yumuşak bir fade-in (staggered) ile gelmesi.
*   **Galeri Hover Efekti:** Görselin üzerine gelindiğinde görselin %105 oranında yavaşça büyümesi (scale), üzerindeki siyah filtrenin kalkması ve proje adının belirmesi.
*   **Scroll Reveal:** Sayfa aşağı kaydırıldıkça (About, Contact) bölümlerinin opaklığının 0'dan 1'e çıkması (y-axis offset ile).
*   **Custom Cursor (Opsiyonel):** Standart imleç yerine, tıklanabilir öğelerin üzerinde büyüyen (invert filter) minimal bir nokta imleç.

## 5. UI Bileşenleri (Components)
*   **Navbar:** Sabit (Sticky), aşağı scroll edildiğinde arka planı blur'laşan (glassmorphism efektli) yarı saydam header.
*   **Galeri Kartı:** Görsel, köşeleri hafif yuvarlatılmış (border-radius: 12px), ince bir çerçeve (border: 1px solid rgba(255,255,255,0.1)).
*   **Butonlar:** Accent renkli arka plan, hover durumunda parlayan (glow) gölge efekti.