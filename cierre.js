/* cierre.js · Pantalla de "tienda cerrada".
   Se activa cuando en productos.js dice:  const TIENDA_ABIERTA = false;
   Si dice true (o no existe), este archivo no hace nada. */
(function(){
  if (typeof TIENDA_ABIERTA === "undefined" || TIENDA_ABIERTA !== false) return;

  const titulo = typeof CIERRE_TITULO !== "undefined" ? CIERRE_TITULO : "Tienda cerrada por el momento";
  const texto  = typeof CIERRE_TEXTO  !== "undefined" ? CIERRE_TEXTO  : "Por ahora no estoy tomando pedidos. Mientras tanto, mirá algunas de mis piezas y seguime en Instagram para enterarte cuándo vuelvo a abrir.";
  const reabre = typeof CIERRE_REABRE !== "undefined" ? CIERRE_REABRE : "";
  const FOTOS  = 12;                       // cuántas fotos rotan en el carrusel
  const CADA   = 3600;                     // milisegundos entre foto y foto
  const ig = (document.querySelector(".igb") || {}).href || "https://www.instagram.com/solari.sl/";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  const st = document.createElement("style");
  st.textContent = `
  body.cerrada #nav, body.cerrada #main, body.cerrada #fab, body.cerrada #ov, body.cerrada #pv, body.cerrada .fig{display:none!important}
  body.cerrada header{display:block!important}
  #cierre{position:relative;z-index:1;max-width:640px;margin:0 auto;padding:6px 18px 10px;text-align:center}
  #cierre h2{font:400 clamp(24px,6vw,34px) Cinzel,Georgia,serif;color:var(--gold);margin:6px 0 12px;letter-spacing:.04em}
  #cierre .cz-t{color:var(--tx);max-width:520px;margin:0 auto 12px}
  #cierre .cz-r{display:inline-block;border:1px solid var(--gold);color:var(--gold2);letter-spacing:.14em;text-transform:uppercase;font-size:11px;padding:9px 16px;margin:6px 0}
  .cz-car{position:relative;width:min(84vw,390px);aspect-ratio:1/1;margin:24px auto 12px;border:1px solid var(--gold);background:#000;overflow:hidden;box-shadow:0 0 44px rgba(166,138,91,.2)}
  .cz-car:after{content:"";position:absolute;inset:6px;border:1px solid rgba(201,174,124,.45);pointer-events:none;z-index:3}
  .cz-car img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.03);transition:opacity 1.3s ease,transform 7s ease-out}
  .cz-car img.on{opacity:1;transform:scale(1.12)}
  .cz-cap{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:34px 12px 14px;background:linear-gradient(transparent,rgba(0,0,0,.85));font:500 11px Montserrat,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--gold2)}
  .cz-dots{display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin-bottom:26px}
  .cz-dots button{width:8px;height:8px;padding:0;border-radius:50%;border:1px solid var(--gold);background:none;cursor:pointer;transition:.3s}
  .cz-dots button.on{background:var(--gold);transform:scale(1.3)}
  #cierre .cz-s{font:500 12px Montserrat,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--gold2);margin:0 0 12px}
  #cierre .cz-f{font-size:12px;color:var(--mut);margin:20px auto 0;max-width:420px}`;
  document.head.appendChild(st);
  document.body.classList.add("cerrada");

  const src = p => (typeof IMG !== "undefined") ? IMG[p.id] : p.id + ".jpg";
  const lista = (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).filter(p => !p.off && p.s > 0);
  for (let i = lista.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lista[i], lista[j]] = [lista[j], lista[i]]; }
  const pick = lista.slice(0, FOTOS);

  const sec = document.createElement("section");
  sec.id = "cierre";
  sec.innerHTML = `<h2>${esc(titulo)}</h2>
    <p class="cz-t">${esc(texto)}</p>
    ${reabre ? `<div class="cz-r">${esc(reabre)}</div>` : ""}
    ${pick.length ? `<div class="cz-car">${pick.map((p, i) => `<img src="${esc(src(p))}" alt="${esc(p.n)}" data-n="${esc(p.n)}">`).join("")}<div class="cz-cap" id="czc"></div></div>
    <div class="cz-dots">${pick.map((p, i) => `<button aria-label="Foto ${i + 1}"></button>`).join("")}</div>` : ""}
    <p class="cz-s">¿Querés enterarte cuándo abro?</p>
    <a class="btn cta igb" href="${esc(ig)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>Seguime en Instagram</a>
    <p class="cz-f">Cuando la tienda esté abierta vas a poder armar tu carrito acá mismo y finalizar la compra por WhatsApp.</p>`;
  const hd = document.querySelector("header");
  (hd && hd.parentNode ? hd.parentNode : document.body).insertBefore(sec, hd ? hd.nextSibling : null);

  const imgs = [...sec.querySelectorAll(".cz-car img")], dots = [...sec.querySelectorAll(".cz-dots button")], cap = sec.querySelector("#czc");
  imgs.forEach(im => im.addEventListener("error", () => { im.remove(); }));
  if (!imgs.length) return;
  let k = 0, timer;
  function show(n) {
    const vivas = [...sec.querySelectorAll(".cz-car img")];
    if (!vivas.length) return;
    k = (n + vivas.length) % vivas.length;
    vivas.forEach((im, i) => im.classList.toggle("on", i === k));
    dots.forEach((d, i) => d.classList.toggle("on", i === k));
    if (cap) cap.textContent = vivas[k].dataset.n || "";
  }
  const play = () => { clearInterval(timer); timer = setInterval(() => show(k + 1), CADA); };
  dots.forEach((d, i) => d.addEventListener("click", () => { show(i); play(); }));
  const car = sec.querySelector(".cz-car");
  car.addEventListener("mouseenter", () => clearInterval(timer));
  car.addEventListener("mouseleave", play);
  let x0 = null;
  car.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, {passive:true});
  car.addEventListener("touchend", e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 40) { show(k + (dx < 0 ? 1 : -1)); play(); } });
  show(0); play();
})();
