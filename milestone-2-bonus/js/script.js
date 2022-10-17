/*** LOOP ***/ 

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
const divImages = document.createElement('div');

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


// al click su next
next.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  items[contCarousel].classList.remove('active');
  // se il contatore è arrivato alla fine lo rimetto all'inizio -1 per creare il loop
  if(contCarousel == (imagesCarousel.length - 1)) contCarousel = -1;
  // incremento il contatore
  contCarousel++;
  // metto la classe active sulla nuova immagine
  items[contCarousel].classList.add('active');
});

// al click su prev
prev.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  items[contCarousel].classList.remove('active');
  // se il contatore è a 0 lo rimetto alla fine +1 per creare il loop
  if(contCarousel == 0) contCarousel = imagesCarousel.length;
  // decremento il contatore
  contCarousel--;
  // metto la classe active sulla nuova immagine
  items[contCarousel].classList.add('active');
 
});
