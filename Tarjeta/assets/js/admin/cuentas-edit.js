/**
 * Logica interactiva para vista cuentas-edit (admin) - Tarjeta
 */

function saveAccountChanges() {
      const clp = document.getElementById('editCreditClp').value;
      alert(`¡Parámetros de cuenta guardados con éxito! El nuevo cupo de $${parseInt(clp).toLocaleString('es-CL')} CLP ha sido registrado en el sistema central.`);
      window.location.href = "cuentas-list.html";
    }