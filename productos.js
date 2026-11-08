/* ========= CONFIGURACIÓN (editá acá) ========= */
const WHATSAPP = "5492216307977";   // tu número: código de país + área + número, sin + ni espacios
const NOMBRE   = "Sofia";
const PAGOS = [
  {n:"Transferencia", msg:"quiero transferirte"},
  {n:"Efectivo",      msg:"quiero pagar en efectivo", desc:false},   // desc:true = aplica el descuento en efectivo
  {n:"Mercado Pago",  msg:"quiero pagar con Mercado Pago"}
];
const ENTREGAS = [
  {n:"Envío a domicilio",  msg:"Elijo que me lo envíes", pide:"Dirección y localidad"},
  {n:"Punto de entrega",   msg:"Elijo la entrega en un punto de entrega"}
];
const DESC_EFECTIVO = 10;   // % de descuento pagando en efectivo (poné 0 para sacarlo)
const SENA = 25;             // % de seña obligatoria para reservar el pedido (poné 0 para sacarla)
const ENVIO_CLIENTE = "Una vez finalizada la compra, se coordina por Whatsapp dependiendo del costo dado por Correo Argentino.";   // aviso sobre el envío (dejalo "" para sacarlo)
 
/* Precio por categoría: se usa para todos los productos de esa categoría que NO tengan su propio "p".
   Ej: aros: 6500. Dejá null si todavía no tenés precio. */
const PRECIO_CAT = {chockers:8000, cadenitas:11000, collares:17000, hilo:10000, piedras:8000, aros:6000, pulseras:5000, llaveros:10000, anillos:3000};
 
/* Puntos de entrega en La Plata (se muestran en el Inicio). n = nombre, d = dirección/zona, h = días y horarios (opcional).
   Si dejás la lista vacía [], la sección no se muestra. */
const PUNTOS = [
  {"n":"Plaza Rocha","d":"7 y 60, La Plata"},
  {"n":"Plaza San Martin","d":"6 y 54, La Plata"},
  {"n":"Plaza Moreno","d":"12 y 54, La Plata"},
  {"n":"Plaza Azcuénaga","d":"19 y 44, La Plata"},
  {"n":"Parque Alberti","d":"25 y 38, La Plata"},
  {"n":"Estación de tren","d":"1 y 44, La Plata"}
];
 
/* Productos: id, cat, n = nombre, p = precio propio (número; si es null usa el de la categoría), s = stock (0 = agotado), off:true = ocultar
 
   OPCIONALES (para la ficha que se abre al tocar un producto):
     "fotos":["cho01_2.jpg","cho01_3.jpg"]   fotos extra: los archivos van en la misma carpeta que index.html
     "desc":"Texto que cuenta más del accesorio"
     "med":"Dije de 4 cm, cadena de 40 cm"
   Ejemplo (se agregan al final de la línea del producto, separados por coma):
   {"id":"cho01","cat":"chockers","n":"Choker cruz gótica roja","p":null,"s":1,"fotos":["cho01_2.jpg","cho01_3.jpg"],"desc":"Escribí acá la descripción.","med":"Medidas"},
*/
const PRODUCTS = [
{"id":"hil01","cat":"hilo","n":"collar hilo catedral gótica","p":10000,"s":1,"v":1794103132409},
{"id":"cho01","cat":"chockers","n":"Choker cruz gótica roja","p":8000,"s":1,"v":1794001503901},
{"id":"cho02","cat":"chockers","n":"Choker luna creciente","p":8000,"s":1},
{"id":"cho03","cat":"chockers","n":"Choker corazón de púas","p":8000,"s":1},
{"id":"cho04","cat":"chockers","n":"Choker Saturno","p":8000,"s":1},
{"id":"cho05","cat":"chockers","n":"Choker corazón negro con rayos","p":8000,"s":1},
{"id":"cho06","cat":"chockers","n":"Choker araña","p":8000,"s":1},
{"id":"cho07","cat":"chockers","n":"Choker telaraña","p":8000,"s":1},
{"id":"cad01","cat":"cadenitas","n":"Cadenita corazón de espinas rojo","p":11000,"s":3,"v":1794000754107},
{"id":"cad02","cat":"cadenitas","n":"Cadenita cruz gótica roja","p":11000,"s":2,"v":1794001049130},
{"id":"cad03","cat":"cadenitas","n":"Cadenita murciélago grande","p":11000,"s":3,"v":1794001121493},
{"id":"cad04","cat":"cadenitas","n":"Cadenita cruz roja uniforme","p":11000,"s":1,"v":1794001210871},
{"id":"cad05","cat":"cadenitas","n":"Cadenita cruz filigrana piedra roja","p":11000,"s":2,"v":1794001268727},
{"id":"cad06","cat":"cadenitas","n":"Cadenita cruz filigrana piedra negra","p":11000,"s":2,"v":1794001273227},
{"id":"cad07","cat":"cadenitas","n":"Cadenita corazón negro con rayos","p":11000,"s":5,"v":1794001331518},
{"id":"cad08","cat":"cadenitas","n":"Cadenita corazón rojo con rayos","p":11000,"s":4,"v":1794001340852},
{"id":"cad09","cat":"cadenitas","n":"Cadenita corazón rojo con púas","p":11000,"s":3,"v":1794001379615},
{"id":"cad10","cat":"cadenitas","n":"Cadenita corazón rojo con alitas","p":11000,"s":2},
{"id":"cad11","cat":"cadenitas","n":"Cadenita corazón blanco con alitas negras","p":11000,"s":1,"desc":"Cadena de aleación esmaltada."},
{"id":"cad12","cat":"cadenitas","n":"Cadenita corazón negro con alitas negras","p":11000,"s":1,"desc":"Cadena de aleación esmaltada."},
{"id":"cad13","cat":"cadenitas","n":"Cadenita murciélago rojo","p":11000,"s":1},
{"id":"cad14","cat":"cadenitas","n":"Cadenita murciélago negro","p":11000,"s":1},
{"id":"cad15","cat":"cadenitas","n":"Cadenita polilla","p":11000,"s":3},
{"id":"cad16","cat":"cadenitas","n":"Cadenita cruz filigrana","p":11000,"s":2},
{"id":"cad17","cat":"cadenitas","n":"Cadenita estrella con corazón negro","p":11000,"s":5},
{"id":"cad18","cat":"cadenitas","n":"Cadenita estrella con corazón rojo","p":11000,"s":3},
{"id":"cad19","cat":"cadenitas","n":"Cadenita corazón de espinas negro","p":11000,"s":4},
{"id":"cad20","cat":"cadenitas","n":"Cadenita colgante catedral gótica","p":11000,"s":3},
{"id":"col01","cat":"collares","n":"Collar camafeo negro de murciélago","p":22000,"s":3,"v":1794102969623,"fotos":["col01_mw5icgn99j.jpg","col01_mw5icgri9q.jpg","col01_mw76ll7nkd.jpg"]},
{"id":"col02","cat":"collares","n":"Collar de gotas rojas colgantes","p":22000,"s":1,"v":1794001577736,"fotos":["col02_mw5i8pw46l.jpg","col02_mw5i8q1222.jpg"]},
{"id":"col03","cat":"collares","n":"Collar corazón de espinas con púas","p":17000,"s":3,"v":1794001996485,"fotos":["col03_mw5ih69xvd.jpg"]},
{"id":"col04","cat":"collares","n":"Collar de malla con corazón rojo","p":17000,"s":3,"v":1794002104115,"fotos":["col04_mw5ijb5sx4.jpg"]},
{"id":"col05","cat":"collares","n":"Collar corazón negro con púas","p":17000,"s":7,"v":1794002198167,"fotos":["col05_mw5ilda4x9.jpg"]},
{"id":"col06","cat":"collares","n":"Collar pentagrama","p":5000,"s":1,"desc":"Cadena de niquel."},
{"id":"col07","cat":"collares","n":"Collar cadenas con gotas rojas","p":17000,"s":3},
{"id":"col08","cat":"collares","n":"Collar rosas con cadenas","p":17000,"s":8},
{"id":"col09","cat":"collares","n":"Collar corazón violeta con cruz y púas","p":17000,"s":1},
{"id":"col10","cat":"collares","n":"Collar araña con piedra roja","p":17000,"s":1},
{"id":"col11","cat":"collares","n":"Collar de gotas rojas","p":17000,"s":3},
{"id":"col12","cat":"collares","n":"Collar con púas y cadenas","p":20000,"s":1},
{"id":"col13","cat":"collares","n":"Collarcorazón rojo oscuro con alitas","p":17000,"s":2,"v":1794002304589,"fotos":["col13_mw5io334br.jpg"]},
{"id":"col14","cat":"collares","n":"Collar cruz roja con perlas negras","p":17000,"s":1},
{"id":"col15","cat":"collares","n":"Collar corazón rojo con alitas","p":17000,"s":1},
{"id":"col16","cat":"collares","n":"Collar corazón con alitas y gotas","p":17000,"s":1},
{"id":"col17","cat":"collares","n":"Collar polilla","p":17000,"s":2},
{"id":"col18","cat":"collares","n":"Collar camafeo negro de polilla","p":22000,"s":1},
{"id":"col19","cat":"collares","n":"Collar cruz con piedra roja","p":17000,"s":2},
{"id":"col20","cat":"collares","n":"Collar murciélago rojo con cadenas","p":17000,"s":2},
{"id":"pie01","cat":"piedras","n":"Collar de perlas con cruz","p":8000,"s":1},
{"id":"pie02","cat":"piedras","n":"Collar de perlas con Saturno","p":8000,"s":1},
{"id":"pie03","cat":"piedras","n":"Rosario negro con pentagrama y púa","p":14000,"s":1},
{"id":"pie04","cat":"piedras","n":"Rosario rojo con cruces","p":5000,"s":0},
{"id":"aro01","cat":"aros","n":"Aros fantasmitas blancos","p":null,"s":0,"off":true},
{"id":"aro02","cat":"aros","n":"Aros fantasmitas enojados","p":5000,"s":1},
{"id":"aro03","cat":"aros","n":"Aros calabazas","p":null,"s":0,"off":true},
{"id":"aro04","cat":"aros","n":"Aros murciélagos dorados","p":5000,"s":1},
{"id":"aro05","cat":"aros","n":"Aros cruz y púa dorados","p":5000,"s":1},
{"id":"aro06","cat":"aros","n":"Aros de piedra amarilla","p":null,"s":1},
{"id":"aro07","cat":"aros","n":"Aros ouija con gatitos","p":null,"s":0,"off":true},
{"id":"aro08","cat":"aros","n":"Aros esqueletos esmaltados","p":5000,"s":2},
{"id":"aro09","cat":"aros","n":"Argollas fueguito","p":6000,"s":2},
{"id":"aro10","cat":"aros","n":"Argollas corazón negro","p":8000,"s":1},
{"id":"aro11","cat":"aros","n":"Argollas triángulo negro","p":8000,"s":0,"off":true},
{"id":"aro12","cat":"aros","n":"Aros cruz de cadenitas con púa","p":6000,"s":1},
{"id":"aro13","cat":"aros","n":"Aros corazón de espinas","p":6000,"s":4},
{"id":"aro14","cat":"aros","n":"Aros estrella","p":6000,"s":1},
{"id":"aro15","cat":"aros","n":"Aros alas","p":6000,"s":1},
{"id":"aro16","cat":"aros","n":"Aros manos esqueleto","p":6000,"s":1},
{"id":"aro17","cat":"aros","n":"Aros hojita de afeitar","p":6000,"s":1},
{"id":"aro18","cat":"aros","n":"Aros calaveras con corona","p":6000,"s":1},
{"id":"aro19","cat":"aros","n":"Aros con piedra roja","p":6000,"s":4},
{"id":"aro20","cat":"aros","n":"Aros daga","p":null,"s":0,"off":true},
{"id":"aro21","cat":"aros","n":"Aros esqueleto","p":null,"s":0,"off":true},
{"id":"aro22","cat":"aros","n":"Aros telaraña","p":6000,"s":0},
{"id":"aro23","cat":"aros","n":"Aros fueguito","p":6000,"s":2},
{"id":"aro24","cat":"aros","n":"Aros cruz","p":6000,"s":1},
{"id":"aro25","cat":"aros","n":"Aros espiral","p":6000,"s":1},
{"id":"aro26","cat":"aros","n":"Argollas corazón tribal","p":8000,"s":4},
{"id":"pul01","cat":"pulseras","n":"Pulsera de hojitas de afeitar","p":5000,"s":0,"v":1794002420487,"fotos":["pul01_mw5iq9a6z6.jpg"],"off":true},
{"id":"pul02","cat":"pulseras","n":"Pulsera con corazón","p":5000,"s":1,"v":1794002442275,"fotos":["pul02_mw5iqjuqaw.jpg"]},
{"id":"pul03","cat":"pulseras","n":"Pulsera de bolitas con corazones de colores","p":5000,"s":1},
{"id":"pul04","cat":"pulseras","n":"Pulsera dorada con esqueleto","p":5000,"s":1},
{"id":"lla01","cat":"llaveros","n":"Llavero flor","p":10000,"s":1},
{"id":"lla02","cat":"llaveros","n":"Llavero estrella con púas","p":10000,"s":1},
{"id":"ani01","cat":"anillos","n":"Anillo trenzado calado","p":null,"s":1},
{"id":"ani02","cat":"anillos","n":"Anillo nudo de bruja talle 21","p":null,"s":2},
{"id":"ani03","cat":"anillos","n":"Anillo de corazones calados","p":null,"s":1},
{"id":"ani04","cat":"anillos","n":"Anillo de rombos calados","p":null,"s":1},
{"id":"ani05","cat":"anillos","n":"Anillo frase love you","p":null,"s":1},
{"id":"ani06","cat":"anillos","n":"Anillo de círculos entrelazados","p":null,"s":1},
{"id":"ani07","cat":"anillos","n":"Anillo con piedritas negras","p":null,"s":1},
{"id":"ani08","cat":"anillos","n":"Anillo de triángulos","p":null,"s":2},
{"id":"ani09","cat":"anillos","n":"Anillo de rectángulos","p":null,"s":1},
{"id":"ani10","cat":"anillos","n":"Anillo clavo negro","p":null,"s":1},
{"id":"ani11","cat":"anillos","n":"Anillo hueso","p":4000,"s":1},
{"id":"ani12","cat":"anillos","n":"Anillo clavo celeste","p":null,"s":1},
{"id":"ani13","cat":"anillos","n":"Anillo estrella","p":null,"s":0,"off":true},
{"id":"ani14","cat":"anillos","n":"Anillo hexágono","p":null,"s":1},
{"id":"ani15","cat":"anillos","n":"Anillo corazón trenzado","p":6000,"s":1},
{"id":"ani16","cat":"anillos","n":"Anillo dorado clavo violeta","p":null,"s":1},
{"id":"ani17","cat":"anillos","n":"Anillo dorado clavo celeste","p":null,"s":1},
{"id":"ani18","cat":"anillos","n":"Anillo dorado clavo rojo","p":null,"s":1},
{"id":"ani19","cat":"anillos","n":"Anillo dorado negro con strass","p":6000,"s":1},
{"id":"ani20","cat":"anillos","n":"Anillo dorado de monedas","p":null,"s":1},
{"id":"ani21","cat":"anillos","n":"Anillo dorado nudo de bruja talle 17, 18 y 19","p":null,"s":1},
{"id":"ani22","cat":"anillos","n":"Anillo rosé trenzado","p":null,"s":1},
{"id":"ani23","cat":"anillos","n":"Anillo rosé de corazones","p":null,"s":1},
{"id":"ani24","cat":"anillos","n":"Anillo dorado ondas","p":null,"s":1},
{"id":"col21","cat":"collares","n":"collar cruz roja con púas","p":17000,"s":1,"v":1794102167144},
{"id":"hil02","cat":"hilo","n":"collar hilo cruz negra","p":10000,"s":1,"v":1794103638909},
{"id":"hil03","cat":"hilo","n":"collar hilo negro destello","p":10000,"s":1,"v":1794103697013},
{"id":"hil04","cat":"hilo","n":"collar hilo corazón negro ","p":10000,"s":1,"v":1794103922322},
{"id":"hil05","cat":"hilo","n":"collar hilo corazón negro con rayos","p":10000,"s":1,"v":1794104021458}
];
/* ============================================= */
const CATS = [
 {
  "k": "chockers",
  "t": "Chockers",
  "d": "de terciopelo"
 },
 {
  "k": "cadenitas",
  "t": "Cadenitas",
  "d": "de acero quirúrgico y aleación esmaltado"
 },
 {
  "k": "collares",
  "t": "Collares",
  "d": "hechos a mano de acero quirúrgico"
 },

  {
  "k": "hilo",
  "t": "Collares con hilo",
  "d": ""
 },
  
 {
  "k": "piedras",
  "t": "Collares con piedras o perlas",
  "d": ""
 },
 {
  "k": "aros",
  "t": "Aros",
  "d": "con gancho de acero quirúrgico"
 },
 {
  "k": "pulseras",
  "t": "Pulseras",
  "d": "hechas a mano de acero quirúrgico"
 },
 {
  "k": "llaveros",
  "t": "Llaveros",
  "d": "hechos a mano de niquel"
 },
 {
  "k": "anillos",
  "t": "Anillos",
  "d": "de acero quirúrgico"
 }
];
const TIENDA_ABIERTA = true;   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada   // true = abierta · false = cerrada
const CIERRE_TITULO = "Tienda cerrada por el momento";
const CIERRE_TEXTO = "Por ahora no estoy tomando pedidos. Mientras tanto, mirá algunas de mis piezas y seguime en Instagram para enterarte cuándo vuelvo a abrir.";
const CIERRE_REABRE = "";
