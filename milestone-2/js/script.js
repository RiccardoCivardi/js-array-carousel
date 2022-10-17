/*** ANDATA E RITORNO ***/ 
/*** Faccio sparire le frecce a seconda che siamo all'inizio o alla fine ***/ 


//array immagini 
const imagesCarousel = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

//prendo il carosello
const carousel = document.querySelector('.carousel');
//prendo i bottoni di avanzamento
const next = document.querySelector('.circle.bottom');
const prev = document.querySelector('.circle.top');
// creo contatore inizializzato a 0
let contCarousel = 0;

// creo div.immages 
divImages = document.createElement('div');

// a divImages assegno la classe .images
divImages.classList.add('images');

// creo HTML interno a div.images 
for(let i = 0; i < imagesCarousel.length; i++){
  divImages.innerHTML += `
  <img class="item" src="../img/${imagesCarousel[i]}" alt="${imagesCarousel[i]}">
  `;
};

//inserisco divImages nell'html
carousel.prepend(divImages);

//prendo tutti gli elementi con classe active e li inserisco in una collection
const items = document.getElementsByClassName('item');

//rendo visibile la prima immagine
items[contCarousel].classList.add('active');
//partendo da indice 0 nascondo il bottone prev
prev.classList.add('d-none');

// al click su next
next.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  items[contCarousel].classList.remove('active');
  // incremento il contatore
  contCarousel++;
  // metto la classe active sulla nuova immagine
  items[contCarousel].classList.add('active');

  //nascondo il pulsante next quando arrivo all'ultima immagine
  if(contCarousel == (imagesCarousel.length - 1)) next.classList.add('d-none'); 
  // se passo dalla prima alla seconda immagine faccio comparire la freccia per tornare indietro
  if(contCarousel != 0) prev.classList.remove('d-none');
});

// al click su prev
prev.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  items[contCarousel].classList.remove('active');
  // decremento il contatore
  contCarousel--;
  // metto la classe active sulla nuova immagine
  items[contCarousel].classList.add('active');

  //nascondo il pulsante prev quando arrivo alla prima immagine
  if(contCarousel == 0) prev.classList.add('d-none'); 
  // se passo dall'ultima alla penultima immagine faccio comparire la freccia per tornare indietro
  if(contCarousel != (imagesCarousel.length - 1)) next.classList.remove('d-none');
});
