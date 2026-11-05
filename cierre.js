/* cierre.js · Pantalla de "tienda cerrada".
   Se activa cuando en productos.js dice:  const TIENDA_ABIERTA = false;
   Si dice true (o no existe), este archivo no hace nada. */
(function(){
  if (typeof TIENDA_ABIERTA === "undefined" || TIENDA_ABIERTA !== false) return;

  const titulo = typeof CIERRE_TITULO !== "undefined" ? CIERRE_TITULO : "Tienda cerrada por el momento";
  const texto  = typeof CIERRE_TEXTO  !== "undefined" ? CIERRE_TEXTO  : "Por ahora no estoy tomando pedidos. Mientras tanto, mirá algunas de mis piezas y seguime en Instagram para enterarte cuándo vuelvo a abrir.";
  const reabre = typeof CIERRE_REABRE !== "undefined" ? CIERRE_REABRE : "";
  const FOTOS  = 16;                       // cuántas fotos aparecen en las tiras (par)
  const SEG    = 5;                        // segundos que tarda cada foto en cruzar (más alto = más lento)
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
  .cz-strip{margin:26px -18px 22px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
  .cz-row{overflow:hidden;padding:6px 0}
  .cz-track{display:flex;width:max-content;animation:czm var(--d,40s) linear infinite}
  .cz-row.r .cz-track{animation-direction:reverse}
  @keyframes czm{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .cz-i{position:relative;flex:none;margin:0 12px 0 0;width:clamp(128px,34vw,190px);aspect-ratio:1/1;border:1px solid var(--gold);background:#000;overflow:hidden;box-shadow:0 0 22px rgba(166,138,91,.16)}
  .cz-i img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}
  .cz-i figcaption{position:absolute;left:0;right:0;bottom:0;padding:22px 8px 8px;background:linear-gradient(transparent,rgba(0,0,0,.88));font:500 9.5px Montserrat,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--gold2);opacity:0;transition:opacity .3s}
  @media(hover:hover){.cz-strip:hover .cz-track{animation-play-state:paused}.cz-i:hover img{transform:scale(1.08)}.cz-i:hover figcaption{opacity:1}}
  @media(prefers-reduced-motion:reduce){.cz-strip{-webkit-mask-image:none;mask-image:none}.cz-row{overflow-x:auto}.cz-track{animation:none!important}}
  #cierre .cz-s{font:500 12px Montserrat,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--gold2);margin:0 0 12px}
  #cierre .cz-f{font-size:12px;color:var(--mut);margin:20px auto 0;max-width:420px}`;
  document.head.appendChild(st);
  document.body.classList.add("cerrada");

  const src = p => (typeof IMG !== "undefined") ? IMG[p.id] : p.id + ".jpg";
  const lista = (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).filter(p => !p.off && p.s > 0);
  for (let i = lista.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lista[i], lista[j]] = [lista[j], lista[i]]; }
  const pick = lista.slice(0, FOTOS), mid = Math.ceil(pick.length / 2);
  const fila1 = pick.slice(0, mid), fila2 = pick.slice(mid).reverse();
  const tiles = arr => arr.map(p => `<figure class="cz-i"><img src="${esc(src(p))}" alt="${esc(p.n)}" loading="eager"><figcaption>${esc(p.n)}</figcaption></figure>`).join("");

  const sec = document.createElement("section");
  sec.id = "cierre";
  sec.innerHTML = `<h2>${esc(titulo)}</h2>
    <p class="cz-t">${esc(texto)}</p>
    ${reabre ? `<div class="cz-r">${esc(reabre)}</div>` : ""}
    ${pick.length ? `<div class="cz-strip">${[fila1, fila2].map((f, i) => f.length ? `<div class="cz-row ${i ? "r" : ""}"><div class="cz-track" style="--d:${f.length * SEG * (i ? 1.25 : 1)}s">${tiles(f)}${tiles(f)}</div></div>` : "").join("")}</div>` : ""}
    <p class="cz-s">¿Querés enterarte cuándo abro?</p>
    <a class="btn cta igb" href="${esc(ig)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>Seguime en Instagram</a>
    <p class="cz-f">Cuando la tienda esté abierta vas a poder armar tu carrito acá mismo y finalizar la compra por WhatsApp.</p>`;
  const hd = document.querySelector("header");
  (hd && hd.parentNode ? hd.parentNode : document.body).insertBefore(sec, hd ? hd.nextSibling : null);

  sec.querySelectorAll(".cz-i img").forEach(im => im.addEventListener("error", () => { const f = im.closest(".cz-i"); if (f) f.remove(); }));
})();
