/**
 * Logica interactiva para vista productos-tarjetas-create (admin) - Tarjeta
 */

function saveNewPlan() {
      const name = document.getElementById('planNameInput').value;
      alert(`¡Plan "${name}" creado exitosamente! Ahora se encuentra habilitado para evaluación y emisión.`);
      window.location.href = "productos-tarjetas-list.html";
    }