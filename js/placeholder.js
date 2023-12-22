export function spotify() {
var pHolder = [
'Drag Me Down',
'Welcome to My Life',
'Blinding Lights',
'Thunder',
'Make You Mine',
'Make You Mine (Holiday Mix)',
'Ariana Grande - Bang Bang',
'Walau Habis Terang',
'Basket Case',
'Levitating - Dua Lipa',
'Yoasobi 夜に駆ける',
'Hapus Aku - NIDJI',
'bmth - parasite eve',
'jvke - golden hour',
]
var rand = Math.floor(Math.random() * pHolder.length);
document.getElementById("inputQueryEl").placeholder = pHolder[rand];
}
