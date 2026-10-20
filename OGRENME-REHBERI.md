# Kök Kahve — ilk web projem

Bu, hayalî bir yöresel kahve markası için hazırlanmış eğitim projesidir. Ürünler ve fiyatlar örnektir. Sepet yalnızca tarayıcı belleğinde çalışır; sayfa yenilenince sıfırlanır. Gerçek ödeme, sipariş, stok veya üyelik sistemi yoktur.

## İlk çalıştırma

Klasördeki `index.html` dosyasını tarayıcıda aç. Kurulum gerekmez. Kodları ücretsiz Visual Studio Code gibi bir metin editöründe açabilirsin. Dosyayı kaydettikten sonra tarayıcıyı yenileyerek değişikliği gör.

## Hangi dosya ne yapıyor?

- `index.html`: içerik ve sayfa iskeleti; başlıklar, menü, bölümler ve sepet penceresi.
- `style.css`: renkler, yazılar, yerleşim ve mobil görünüm. `:root` renk değişkenlerini tutar; `@media` kuralları küçük ekranları düzenler.
- `app.js`: ürün verileri, filtreler ve sepet. `products` bir nesne dizisidir. `renderProducts` listeyi HTML olarak gösterir; `addEventListener` tıklamaları dinler.

## Birlikte ilerleyeceğimiz sıra

1. HTML: marka adını ve ana başlığı değiştir, yeni bir bölüm ekle.
2. CSS: ana rengi değiştir, boşlukları ve mobil düzeni incele.
3. JavaScript: ürün ekle, fiyat değiştir, filtre ve sepet kodunu öğren.
4. Git: ilk kaydı (commit) oluştur, bir değişikliği kaydet ve geçmişini incele.
5. Yayın: ücretsiz barındırma seçeneğinin o günkü koşullarını kontrol edip birlikte yayınla.

## İlk alıştırman

`index.html` içindeki “Bir fincan” başlığını bul ve değiştir. Kaydet, tarayıcıyı yenile. Sonra `style.css` içindeki `--orange` rengini değiştir. Son olarak `app.js` içindeki ilk ürünün fiyatını güncelle. Böylece yapı, görünüm ve davranış arasındaki ayrımı göreceksin.

## Yayına hazırlık

Bu sürüm statik olduğu için sunucu kodu veya veritabanı gerektirmez. Yayın aşamasında GitHub Pages gibi seçeneklerin güncel ücretsiz plan koşullarını birlikte kontrol edeceğiz. Ücretsiz sağlayıcı alt alan adıyla başlayabiliriz; özel alan adı satın almak zorunda değilsin. Site henüz internete yayınlanmadı.

Yayın öncesi kontrol: telefonda görünümü, klavye ile gezinmeyi, bütün filtreleri, ürün ekleme/çıkarma işlemlerini ve menü bağlantılarını dene. Daha sonra Git deposu ve barındırma hesabı kurulumunu adım adım yapacağız.
