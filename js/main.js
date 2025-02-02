onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const message = 'En este poco tiempo te volviste una personita muy especial para mi. Me encanta verte y adoro pasar tiempo a tu lado. 💜 TE QUIERO MUCHOTE 💜'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    // Estilos para centrar el texto
    titleElement.style.fontSize = "30px";
    titleElement.style.color = "white";  // Corregido "Whyte" a "white"
    titleElement.style.textAlign = "center";
    titleElement.style.position = "absolute";
    titleElement.style.top = "-20px";  // Subido más allá del borde superior
    titleElement.style.left = "50%";
    titleElement.style.transform = "translate(-50%, 0)";
    titleElement.style.width = "80%"; // Para que el texto no se salga en pantallas grandes

    function appendTitle() {
      if (index < message.length) {
        titleElement.innerHTML += message[index];
        index++;
        setTimeout(appendTitle, 100);
      }
    }

    appendTitle();
  }, 1000);
};


