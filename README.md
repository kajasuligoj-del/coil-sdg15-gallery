# NOIR — temna galerija

Moderna, odzivna galerija za GitHub Pages, izdelana v HTML, CSS in JavaScript. Brez dodatnih knjižnic.

## Objavi na GitHub Pages
1. Na GitHubu ustvari nov javni repozitorij (npr. `moja-galerija`).
2. V koren repozitorija naloži `index.html`, `style.css`, `script.js` in po želji mapo `images`.
3. Odpri **Settings → Pages** in pri **Build and deployment** izberi **Deploy from a branch**.
4. Izberi vejo `main` in mapo `/ (root)`, nato shrani.
5. Po objavi odpri `https://TVOJE-UPORABNISKO-IME.github.io/moja-galerija/`.

## Dodaj svoje fotografije
- Svoje slike shrani v mapo `images`.
- V `script.js` spremeni vrednost `image` v `images/ime-slike.jpg`.
- Spremeni tudi `title` in `category` (`narava`, `mesto` ali `detajli`).
- Za novo sliko dodaj še en objekt v polje `photos`.

Predogled primerov uporablja oddaljene fotografije iz Unsplash, zato je za prikaz primerov potrebna internetna povezava.

## Roza barvna paleta
Barve prilagodi v `style.css` na začetku v `:root` (predvsem `--accent`, `--bg` in `--surface`).


Galerija zdaj vsebuje 12 primerov fotografij. Fotografije lahko zamenjaš v datoteki `script.js` (seznam `photos`).
