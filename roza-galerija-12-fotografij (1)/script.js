// Zamenjaj spodnje URL-je s svojimi slikami, npr. "images/moja-slika.jpg".
// Fotografije iz Unsplash so samo primeri; za javno objavo uporabi svoje fotografije.
const photos = [
  { title: 'Gorski mir', category: 'narava', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Nočne luči', category: 'mesto', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Tišina gozda', category: 'narava', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Arhitektura', category: 'mesto', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Svetloba in senca', category: 'detajli', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Obzorje', category: 'narava', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Morski valovi', category: 'narava', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Mestne ulice', category: 'mesto', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Cvetlični detajli', category: 'detajli', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Gorsko jezero', category: 'narava', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Mesto ponoči', category: 'mesto', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1000&auto=format&fit=crop&q=85' },
  { title: 'Rožnati cvetovi', category: 'detajli', image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=1000&auto=format&fit=crop&q=85' }
];
const names = { narava: 'Narava', mesto: 'Mesto', detajli: 'Detajli' };
const grid = document.querySelector('#gallery-grid');
const count = document.querySelector('#photo-count');
const dialog = document.querySelector('#lightbox');
const largeImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
function render(filter = 'vse') {
  grid.replaceChildren();
  const visible = photos.filter(photo => filter === 'vse' || photo.category === filter);
  count.textContent = String(visible.length).padStart(2, '0');
  visible.forEach(photo => {
    const card = document.createElement('button'); card.className = 'photo-card'; card.type = 'button';
    const frame = document.createElement('div'); frame.className = 'photo-frame';
    const img = document.createElement('img'); img.src = photo.image; img.alt = photo.title; img.loading = 'lazy'; frame.append(img);
    const info = document.createElement('div'); info.className = 'photo-info';
    const text = document.createElement('div');
    const title = document.createElement('div'); title.className = 'photo-title'; title.textContent = photo.title;
    const category = document.createElement('div'); category.className = 'photo-category'; category.textContent = names[photo.category] || photo.category;
    text.append(title, category);
    const arrow = document.createElement('span'); arrow.className = 'photo-arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
    info.append(text, arrow); card.append(frame, info);
    card.addEventListener('click', () => { largeImage.src = photo.image.replace(/w=1000/, 'w=1800'); largeImage.alt = photo.title; caption.textContent = photo.title; dialog.showModal(); });
    grid.append(card);
  });
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); render(button.dataset.filter);
}));
document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
render();
