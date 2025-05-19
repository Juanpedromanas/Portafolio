var tablinks = document.getElementsByClassName("tab-links");
var detallecontenido = document.getElementsByClassName("contenidos-detalle");

function opentab(tabname){
    for (let tablink of tablinks) {
        tablink.classList.remove("link-activo");
    }

    for (let detalle of detallecontenido) {
        detalle.classList.remove("detalle-activo");
    }

    event.currentTarget.classList.add("link-activo");
    document.getElementById(tabname).classList.add("detalle-activo");
}

var sidemenu = document.getElementById("sidemenu");

function abrirmenu(){
    sidemenu.style.right = "0";
}

function cerrarmenu(){
    sidemenu.style.right = "-200px"
}

/* formulario contacto*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzIllC_i1lgHLMTQKxWVWdBVjIZONfmbrrsTdZKEyMuhyWCc-TAJRDsHXulmm2ZsPZD/exec'
  const form = document.forms['submit-to-google-sheet']
  const mensaje = document.getElementById("mensaje")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        mensaje.innerHTML = "Mensaje enviado exitosamente"
        setTimeout(function(){
            mensaje.innerHTML = ""
        }, 3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  /* AMPLIACION TRABAJOS */
  document.querySelectorAll(".ver-proyecto").forEach(boton => {
  boton.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.dataset.id;
    if (id) {
      window.open(`detalle.html?id=${id}`, "_blank");
    }
  });
});

