let cartel = document.querySelector('.cartel');
let overlay = document.querySelector('.overlay');

function openCartel(){
   if (cartel.style.display === 'none') {
        cartel.style.display = 'block';
        overlay.style.display = 'block';
   }else{
       cartel.style.display = 'none';
        overlay.style.display = 'none';
    }
}

let despliegue = document.querySelector('#despliegue');

function openBurguer(){
  if (despliegue.style.display === 'none') {
    despliegue.style.display = 'block';
  }else{
    despliegue.style.display = 'none';
  }
}
