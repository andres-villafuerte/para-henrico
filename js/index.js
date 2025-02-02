const title = document.querySelector('.title');
const text = '¿Quieres saber algo?'.split('');

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`; // Etiqueta bien cerrada
  } else {
    title.innerHTML += `<span style="margin-right: 20px;"></span>`; // Corregido
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Genera un retraso aleatorio entre 0 y 3 segundos
  element.style.animationDelay = `${randomDelay}s`; // Se usa template literal correctamente
});
