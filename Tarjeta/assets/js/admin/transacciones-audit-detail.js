/**
 * Logica interactiva para vista transacciones-audit-detail (admin) - Tarjeta
 */

async function reverseTransaction() {
      const ok = await confirm('¿Confirmas la anulación y reversa inmediata del cargo #TX-88902 por USD $890.00? Los fondos serán reintegrados al cupo del titular.');
      if (ok) {
        await alert('Cargo reversado exitosamente. Se ha generado la nota de crédito y notificado al titular por SMS.');
        window.location.href = "transacciones-audit-list.html";
      }
    }

    async function blockMerchantTerminal() {
      const ok = await confirm('¿Deseas incorporar al comercio "Casino Royale Online (Malta)" y a la IP 185.220.101.4 a la lista negra global de la red MusicPro?');
      if (ok) {
        await alert('Comercio y terminal bloqueados preventivamente a nivel de gateway bancario.');
        window.location.href = "transacciones-audit-list.html";
      }
    }