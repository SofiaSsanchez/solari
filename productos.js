/* ========= CONFIGURACIÓN (editá acá) ========= */
const WHATSAPP = "5492216307977";   // tu número: código de país + área + número, sin + ni espacios
const NOMBRE   = "Sofia";
const PAGOS = [
  {n:"Transferencia", msg:"quiero transferirte"},
  {n:"Efectivo",      msg:"quiero pagar en efectivo", desc:true},   // desc:true = aplica el descuento en efectivo
  {n:"Mercado Pago",  msg:"quiero pagar con Mercado Pago"}
];
const ENTREGAS = [
  {n:"Envío a domicilio",  msg:"Elijo que me lo envíes", pide:"Dirección y localidad"},
  {n:"Punto de entrega",   msg:"Elijo la entrega en un punto de entrega"}
];
const DESC_EFECTIVO = 10;   // % de descuento pagando en efectivo (poné 0 para sacarlo)
const SENA = 25;             // % de seña obligatoria para reservar el pedido (poné 0 para sacarla)
 
/* Precio por categoría: se usa para todos los productos de esa categoría que NO tengan su propio "p".
   Ej: aros: 6500. Dejá null si todavía no tenés precio. */
const PRECIO_CAT = {chockers:8000, cadenitas:11000, collares:17000, piedras:8000, aros:6000, pulseras:5000, llaveros:10000, anillos:4000};
 
/* Puntos de entrega en La Plata (se muestran en el Inicio). n = nombre, d = dirección/zona, h = días y horarios (opcional).
   Si dejás la lista vacía [], la sección no se muestra. */
const PUNTOS = [
  {n:"Plaza Rocha", d:"7 y 60, La Plata"},
  {n:"Plaza San Martin", d:"6 y 54, La Plata"},
  {n:"Plaza Moreno", d:"12 y 54, La Plata"},
  {n:"Plaza Azcuénaga", d:"19 y 44, La Plata"},
  {n:"Parque Alberti", d:"25 y 38, La Plata"},
  {n:"Estación de tren", d:"1 y 44, La Plata"}
];
 
/* Productos: id, cat, n = nombre, p = precio propio (número; si es null usa el de la categoría), s = stock (0 = agotado), off:true = ocultar */
const PRODUCTS = [
{"id":"cho01","cat":"chockers","n":"Choker cruz gótica roja","p":null,"s":1},
{"id":"cho02","cat":"chockers","n":"Choker luna creciente","p":null,"s":1},
{"id":"cho03","cat":"chockers","n":"Choker corazón de púas","p":null,"s":1},
{"id":"cho04","cat":"chockers","n":"Choker Saturno","p":null,"s":1},
{"id":"cho05","cat":"chockers","n":"Choker corazón negro con rayos","p":null,"s":1},
{"id":"cho06","cat":"chockers","n":"Choker araña","p":null,"s":1},
{"id":"cho07","cat":"chockers","n":"Choker telaraña","p":null,"s":1},
{"id":"cad01","cat":"cadenitas","n":"Cadenita corazón rojo esmaltado","p":null,"s":1},
{"id":"cad02","cat":"cadenitas","n":"Cadenita cruz gótica roja","p":null,"s":1},
{"id":"cad03","cat":"cadenitas","n":"Cadenita murciélago con alas","p":null,"s":1},
{"id":"cad04","cat":"cadenitas","n":"Cadenita cruz roja fina","p":null,"s":1},
{"id":"cad05","cat":"cadenitas","n":"Cadenita cruz filigrana piedra roja","p":null,"s":1},
{"id":"cad06","cat":"cadenitas","n":"Cadenita cruz filigrana piedra negra","p":null,"s":1},
{"id":"cad07","cat":"cadenitas","n":"Cadenita corazón negro con rayos","p":null,"s":1},
{"id":"cad08","cat":"cadenitas","n":"Cadenita corazón rojo con rayos","p":null,"s":1},
{"id":"cad09","cat":"cadenitas","n":"Cadenita corazón rojo con púas","p":null,"s":1},
{"id":"cad10","cat":"cadenitas","n":"Cadenita corazón rojo con alitas","p":null,"s":1},
{"id":"cad11","cat":"cadenitas","n":"Cadenita corazón blanco con alitas negras","p":null,"s":1},
{"id":"cad12","cat":"cadenitas","n":"Cadenita corazón negro con alitas","p":null,"s":1},
{"id":"cad13","cat":"cadenitas","n":"Cadenita murciélago rojo","p":null,"s":1},
{"id":"cad14","cat":"cadenitas","n":"Cadenita murciélago plateado","p":null,"s":1},
{"id":"cad15","cat":"cadenitas","n":"Cadenita polilla","p":null,"s":1},
{"id":"cad16","cat":"cadenitas","n":"Cadenita cruz filigrana","p":null,"s":1},
{"id":"cad17","cat":"cadenitas","n":"Cadenita estrella con corazón negro","p":null,"s":1},
{"id":"cad18","cat":"cadenitas","n":"Cadenita estrella con corazón rojo","p":null,"s":1},
{"id":"cad19","cat":"cadenitas","n":"Cadenita corazón de espinas","p":null,"s":1},
{"id":"cad20","cat":"cadenitas","n":"Cadenita colgante filigrana gótico","p":null,"s":1},
{"id":"col01","cat":"collares","n":"Collar camafeo de murciélago","p":22000,"s":1},
{"id":"col02","cat":"collares","n":"Collar de gotas rojas colgantes","p":22000,"s":1},
{"id":"col03","cat":"collares","n":"Collar corazón de espinas con púas","p":null,"s":1},
{"id":"col04","cat":"collares","n":"Collar de malla con corazón rojo","p":null,"s":1},
{"id":"col05","cat":"collares","n":"Collar corazón negro con púas","p":null,"s":1},
{"id":"col06","cat":"collares","n":"Collar pentagrama","p":5000,"s":1},
{"id":"col07","cat":"collares","n":"Collar cadenas con gotas rojas","p":null,"s":1},
{"id":"col08","cat":"collares","n":"Collar rosas con cadenas","p":null,"s":1},
{"id":"col09","cat":"collares","n":"Collar corazón violeta con cruz y púas","p":null,"s":1},
{"id":"col10","cat":"collares","n":"Collar araña con piedra roja","p":null,"s":1},
{"id":"col11","cat":"collares","n":"Collar de gotas rojas","p":null,"s":1},
{"id":"col12","cat":"collares","n":"Collar con púas y cadenas","p":20000,"s":1},
{"id":"col13","cat":"collares","n":"Collarcorazón rojo oscuro con alitas","p":null,"s":1},
{"id":"col14","cat":"collares","n":"Collar cruz roja con perlas negras","p":null,"s":1},
{"id":"col15","cat":"collares","n":"Collar corazón rojo con alitas","p":null,"s":1},
{"id":"col16","cat":"collares","n":"Collar corazón con alitas y gotas","p":null,"s":1},
{"id":"col17","cat":"collares","n":"Collar polilla","p":null,"s":1},
{"id":"col18","cat":"collares","n":"Collar camafeo de polilla","p":22000,"s":1},
{"id":"col19","cat":"collares","n":"Collar cruz con piedra roja","p":null,"s":1},
{"id":"col20","cat":"collares","n":"Collar murciélago rojo con cadenas","p":null,"s":1},
{"id":"pie01","cat":"piedras","n":"Collar de perlas con cruz","p":null,"s":1},
{"id":"pie02","cat":"piedras","n":"Collar de perlas con Saturno","p":null,"s":1},
{"id":"pie03","cat":"piedras","n":"Rosario negro con pentagrama y púa","p":14000,"s":1},
{"id":"pie04","cat":"piedras","n":"Rosario rojo con cruces","p":5000,"s":1},
{"id":"aro01","cat":"aros","n":"Aros fantasmitas blancos","p":null,"s":1},
{"id":"aro02","cat":"aros","n":"Aros fantasmitas enojados","p":null,"s":1},
{"id":"aro03","cat":"aros","n":"Aros calabazas","p":null,"s":1},
{"id":"aro04","cat":"aros","n":"Aros murciélagos dorados","p":null,"s":1},
{"id":"aro05","cat":"aros","n":"Aros cruz y púa dorados","p":null,"s":1},
{"id":"aro06","cat":"aros","n":"Aros de piedra amarilla","p":null,"s":1},
{"id":"aro07","cat":"aros","n":"Aros ouija con gatitos","p":null,"s":1},
{"id":"aro08","cat":"aros","n":"Aros esqueletos esmaltados","p":null,"s":1},
{"id":"aro09","cat":"aros","n":"Argollas fueguito","p":null,"s":1},
{"id":"aro10","cat":"aros","n":"Argollas corazón negro","p":8000,"s":1},
{"id":"aro11","cat":"aros","n":"Argollas triángulo negro","p":8000,"s":1},
{"id":"aro12","cat":"aros","n":"Aros cruz de cadenitas con púa","p":null,"s":1},
{"id":"aro13","cat":"aros","n":"Aros corazón de espinas","p":null,"s":1},
{"id":"aro14","cat":"aros","n":"Aros estrella","p":null,"s":1},
{"id":"aro15","cat":"aros","n":"Aros alas","p":null,"s":1},
{"id":"aro16","cat":"aros","n":"Aros manos esqueleto","p":null,"s":1},
{"id":"aro17","cat":"aros","n":"Aros hojita de afeitar","p":null,"s":1},
{"id":"aro18","cat":"aros","n":"Aros calaveras con corona","p":null,"s":1},
{"id":"aro19","cat":"aros","n":"Aros con piedra roja","p":null,"s":1},
{"id":"aro20","cat":"aros","n":"Aros daga","p":null,"s":1},
{"id":"aro21","cat":"aros","n":"Aros esqueleto","p":null,"s":1},
{"id":"aro22","cat":"aros","n":"Aros telaraña","p":null,"s":1},
{"id":"aro23","cat":"aros","n":"Aros llamas negras","p":null,"s":1},
{"id":"aro24","cat":"aros","n":"Aros cruz","p":null,"s":1},
{"id":"aro25","cat":"aros","n":"Aros espiral","p":null,"s":1},
{"id":"aro26","cat":"aros","n":"Argollas corazón tribal","p":8000,"s":1},
{"id":"pul01","cat":"pulseras","n":"Pulsera de hojitas de afeitar","p":null,"s":1},
{"id":"pul02","cat":"pulseras","n":"Pulsera con corazón","p":null,"s":1},
{"id":"pul03","cat":"pulseras","n":"Pulsera de bolitas con corazones de colores","p":null,"s":1},
{"id":"pul04","cat":"pulseras","n":"Pulsera dorada con esqueleto","p":null,"s":1},
{"id":"lla01","cat":"llaveros","n":"Llavero flor","p":null,"s":1},
{"id":"lla02","cat":"llaveros","n":"Llavero estrella con púas","p":null,"s":1},
{"id":"ani01","cat":"anillos","n":"Anillo trenzado calado","p":null,"s":1},
{"id":"ani02","cat":"anillos","n":"Anillo nudo de bruja talle 16 y 21","p":null,"s":1},
{"id":"ani03","cat":"anillos","n":"Anillo de corazones calados","p":null,"s":1},
{"id":"ani04","cat":"anillos","n":"Anillo de rombos calados","p":null,"s":1},
{"id":"ani05","cat":"anillos","n":"Anillo frase love you","p":null,"s":1},
{"id":"ani06","cat":"anillos","n":"Anillo de círculos entrelazados","p":null,"s":1},
{"id":"ani07","cat":"anillos","n":"Anillo con piedritas negras","p":null,"s":1},
{"id":"ani08","cat":"anillos","n":"Anillo de triángulos","p":null,"s":1},
{"id":"ani09","cat":"anillos","n":"Anillo de rectángulos","p":null,"s":1},
{"id":"ani10","cat":"anillos","n":"Anillo clavo negro","p":null,"s":1},
{"id":"ani11","cat":"anillos","n":"Anillo hueso","p":null,"s":1},
{"id":"ani12","cat":"anillos","n":"Anillo clavo celeste","p":null,"s":1},
{"id":"ani13","cat":"anillos","n":"Anillo estrella","p":null,"s":1},
{"id":"ani14","cat":"anillos","n":"Anillo hexágono","p":null,"s":1},
{"id":"ani15","cat":"anillos","n":"Anillo corazón trenzado","p":6000,"s":1},
{"id":"ani16","cat":"anillos","n":"Anillo dorado clavo violeta","p":null,"s":1},
{"id":"ani17","cat":"anillos","n":"Anillo dorado clavo celeste","p":null,"s":1},
{"id":"ani18","cat":"anillos","n":"Anillo dorado clavo rojo","p":null,"s":1},
{"id":"ani19","cat":"anillos","n":"Anillo dorado negro con strass","p":6000,"s":1},
{"id":"ani20","cat":"anillos","n":"Anillo dorado de monedas","p":null,"s":1},
{"id":"ani21","cat":"anillos","n":"Anillo dorado nudo de bruja","p":null,"s":1},
{"id":"ani22","cat":"anillos","n":"Anillo rosé trenzado","p":null,"s":1},
{"id":"ani23","cat":"anillos","n":"Anillo rosé de corazones","p":null,"s":1},
{"id":"ani24","cat":"anillos","n":"Anillo dorado ondas","p":null,"s":1}
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
