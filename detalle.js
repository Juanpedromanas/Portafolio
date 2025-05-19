document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const container = document.getElementById("detalle-proyecto");

  if (!container) {
    console.error("No se encontró el contenedor para el detalle");
    return;
  }

  if (!window.projectos) {
    console.error("La variable projectos no está definida.");
    return;
  }

  const proyecto = window.projectos.find(p => p.id === id);

  if (proyecto) {
    container.innerHTML = `
      <h1>${proyecto.name}</h1>
      <p>${proyecto.description}</p>
      <h3>Objetivos:</h3>
      <p>${proyecto.objectives}</p>
      <h3>Tecnologías:</h3>
      <ul>${proyecto.technologies.map(tec => `<li>${tec}</li>`).join("")}</ul>
      <h3>Imágenes:</h3>
      <div class="galeria">
        ${proyecto.images.map(img => `<img src="${img}" alt="">`).join("")}
      </div>
    `;
  } else {
    container.innerHTML = "<p>Proyecto no encontrado.</p>";
  }
});
