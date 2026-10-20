// Ürün verileri: yeni bir kahve eklemek için bu listeye bir nesne ekle.
const products = [
  { id: 'turk', name: 'Türk Kahvesi', origin: 'KLASİK BİR RİTÜEL', notes: 'Yoğun gövde · İnce öğütüm', category: 'klasik', price: 210, tone: '#e8e4d5', bag: '#344b37' },
  { id: 'dibek', name: 'Dibek Kahvesi', origin: 'GELENEKTEN İLHAMLA', notes: 'Yumuşak içim · Dengeli karışım', category: 'yoresel', price: 250, tone: '#e9d7c3', bag: '#a86341' },
  { id: 'menengic', name: 'Menengiç', origin: 'GÜNEYDOĞU ESİNTİSİ', notes: 'Menengiç meyvesi · Kendine özgü tat', category: 'yoresel', price: 245, tone: '#dde0cb', bag: '#6a7142' },
  { id: 'damla', name: 'Damla Sakızlı', origin: 'EGE’DEN İLHAMLA', notes: 'Sakız aroması · Ferah bir dokunuş', category: 'aromali', price: 235, tone: '#e4dfd8', bag: '#706051' }
];
const cart = new Map();
const money = value => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(value);
const grid = document.querySelector('#product-grid');
const dialog = document.querySelector('#cart-dialog');
let toastTimer;
function renderProducts(filter = 'all') {
  grid.innerHTML = products.filter(p => filter === 'all' || p.category === filter).map(p => `
    <article class="product-card"><div class="product-art" style="--tone:${p.tone};--bag:${p.bag}" role="img" aria-label="${p.name} örnek ambalaj tasarımı"><div class="bag"><span class="bag-logo">kök</span><small>K A H V E</small><strong>${p.name}</strong><span>250 g · ÖRNEK ÜRÜN</span></div></div><p class="origin">${p.origin}</p><h3>${p.name}</h3><p class="notes">${p.notes}</p><div class="product-bottom"><span>${money(p.price)} <small>/ 250 g</small></span><button class="add-button" data-add="${p.id}" aria-label="${p.name} sepete ekle">+</button></div></article>`).join('');
}
function renderCart() {
  let count = 0, total = 0;
  document.querySelector('#cart-items').innerHTML = [...cart].map(([id, quantity]) => {
    const p = products.find(p => p.id === id); count += quantity; total += p.price * quantity;
    return `<div class="cart-row"><p>${p.name}<small>${quantity} adet · ${money(p.price * quantity)}</small></p><button data-remove="${id}" aria-label="${p.name} bir adet çıkar">Bir adet çıkar</button></div>`;
  }).join('') || '<p>Sepetin henüz boş. Bir kahve keşfetmeye ne dersin?</p>';
  document.querySelector('#cart-count').textContent = count;
  document.querySelector('#cart-total').textContent = money(total);
  document.querySelector('#clear-cart').disabled = count === 0;
}
document.querySelector('.filters').addEventListener('click', e => {
  const button = e.target.closest('[data-filter]'); if (!button) return;
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  renderProducts(button.dataset.filter);
});
grid.addEventListener('click', e => {
  const button = e.target.closest('[data-add]'); if (!button) return;
  const id = button.dataset.add; cart.set(id, (cart.get(id) || 0) + 1); renderCart();
  const toast = document.querySelector('#toast'); toast.textContent = `${products.find(p => p.id === id).name} sepete eklendi`; toast.classList.add('visible');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
});
document.querySelector('#open-cart').addEventListener('click', () => dialog.showModal());
document.querySelector('#close-cart').addEventListener('click', () => dialog.close());
document.querySelector('#cart-items').addEventListener('click', e => {
  const button = e.target.closest('[data-remove]'); if (!button) return;
  const id = button.dataset.remove, quantity = cart.get(id);
  if (quantity > 1) cart.set(id, quantity - 1); else cart.delete(id); renderCart();
});
document.querySelector('#clear-cart').addEventListener('click', () => { cart.clear(); renderCart(); });
renderProducts(); renderCart();
