# Dijital Tabağım — Web Sitesi

Flutter uygulamasıyla aynı Supabase backend'ini kullanan web sitesi.

## 🚀 Kurulum

### 1. Supabase Bağlantısı
`config.js` dosyasını açın ve credentials girin:
```js
const SUPABASE_URL  = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPABASE_ANON = 'your-anon-key-here';
```

### 2. Çalıştırma
Herhangi bir statik dosya sunucusuyla açabilirsiniz:

```bash
# VS Code Live Server eklentisi ile
# veya Python ile:
python -m http.server 8080
# veya Node ile:
npx serve .
```

## 📁 Dosya Yapısı

```
web_site/
├── index.html        ← Ana sayfa (hero, özellikler, popüler tarifler)
├── tarifler.html     ← Tarif listesi + kategori filtreleri + detay modal
├── diyetler.html     ← Diyet planları
├── videolar.html     ← YouTube videolu tarifler
├── vki.html          ← VKİ hesaplayıcı + geçmiş
├── sorular.html      ← Soru sor formu + soru listesi
├── giris.html        ← Giriş / Kayıt ol
├── style.css         ← Tüm tasarım
├── app.js            ← Dil sistemi (TR/EN), navbar, toast
└── config.js         ← Supabase bağlantısı
```

## 🛠 Kullanılan Teknolojiler

- **HTML / CSS / Vanilla JS** — framework gerektirmez
- **Supabase JS SDK v2** — CDN üzerinden
- **Google Fonts (Outfit)** — tipografi
- **YouTube iFrame API** — videolu tarifler

## 🌐 Deployment

### Netlify (Önerilen)
1. Bu klasörü Netlify'a sürükle-bırak

### Vercel
```bash
npx vercel .
```

### GitHub Pages
Repo ayarlarından `main` branch root olarak seçin.

## 📱 Mobil Uygulama
Flutter uygulaması aynı Supabase projesine bağlıdır.
Repo: [Dijitaltabagim-main](../Dijitaltabagim-main)
