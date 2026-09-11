/**
 * Logica interactiva para vista rutas-create (admin) - Transporte
 */

let assignedPackages = [];
    let vehicleCapacity = {
      maxKg: 1750,
      maxM3: 12.0
    };

    function updateVehicleCapacity() {
      const select = document.getElementById('vehicleSelect');
      const option = select.options[select.selectedIndex];
      vehicleCapacity.maxKg = parseFloat(option.dataset.maxkg);
      vehicleCapacity.maxM3 = parseFloat(option.dataset.maxm3);
      document.getElementById('driverInput').value = option.dataset.driver + " (A4 Profesional)";
      renderMeters();
    }

    function transferPackage(btn, direction) {
      const card = btn.closest('.package-card');
      const id = card.dataset.id;
      const zone = card.dataset.zone;
      const kg = parseFloat(card.dataset.kg);
      const m3 = parseFloat(card.dataset.m3);
      const dest = card.dataset.dest;
      const client = card.dataset.client;

      if (direction === 'toRoute') {
        // Remove from left
        card.remove();
        // Add to right
        assignedPackages.push({ id, zone, kg, m3, dest, client });
        renderRouteList();
      } else {
        // Remove from right
        assignedPackages = assignedPackages.filter(p => p.id !== id);
        renderRouteList();
        // Return to left
        returnToPending({ id, zone, kg, m3, dest, client });
      }
      updateCounts();
      renderMeters();
    }

    function returnToPending(p) {
      const list = document.getElementById('pendingPackagesList');
      const div = document.createElement('div');
      div.className = "package-card p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-cyan-50/40 hover:border-cyan-200 transition flex items-center justify-between group";
      div.dataset.id = p.id;
      div.dataset.zone = p.zone;
      div.dataset.kg = p.kg;
      div.dataset.m3 = p.m3;
      div.dataset.dest = p.dest;
      div.dataset.client = p.client;
      div.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs flex-shrink-0 shadow-sm">
            <i class="fa-solid fa-box text-cyan-600"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-slate-900">#${p.id}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">${p.zone}</span>
              <span class="text-[10px] font-medium text-slate-500">${p.kg} kg • ${p.m3} m³</span>
            </div>
            <p class="text-xs text-slate-600 mt-0.5 font-medium">${p.client}</p>
            <p class="text-[11px] text-slate-400 truncate max-w-sm"><i class="fa-solid fa-location-dot text-[10px] mr-1 text-slate-400"></i>${p.dest}</p>
          </div>
        </div>
        <button onclick="transferPackage(this, 'toRoute')" class="w-8 h-8 rounded-lg bg-white group-hover:bg-cyan-600 group-hover:text-white border border-slate-200 group-hover:border-cyan-600 text-slate-700 flex items-center justify-center text-xs transition shadow-sm" title="Agregar a la ruta">
          <i class="fa-solid fa-plus"></i>
        </button>
      `;
      list.appendChild(div);
      filterPackagesByZone();
    }

    function renderRouteList() {
      const container = document.getElementById('routePackagesList');
      if (assignedPackages.length === 0) {
        container.innerHTML = `
          <div id="emptyRoutePlaceholder" class="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
            <i class="fa-solid fa-dolly text-4xl mb-2 text-slate-300"></i>
            <p class="text-xs font-semibold text-slate-600">No hay bultos asignados a esta ruta</p>
            <p class="text-[11px] text-slate-400 mt-1 max-w-xs">Selecciona paquetes de la columna izquierda para balancear la carga vehicular.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = assignedPackages.map((p, idx) => `
        <div class="package-card p-3 rounded-xl border border-cyan-100 bg-cyan-50/30 hover:bg-cyan-50/60 transition flex items-center justify-between" data-id="${p.id}" data-zone="${p.zone}" data-kg="${p.kg}" data-m3="${p.m3}" data-dest="${p.dest}" data-client="${p.client}">
          <div class="flex items-start gap-3">
            <div class="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
              ${idx + 1}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-900">#${p.id}</span>
                <span class="text-[10px] font-medium text-slate-500">${p.kg} kg • ${p.m3} m³</span>
              </div>
              <p class="text-[11px] font-medium text-slate-700 truncate max-w-xs">${p.client}</p>
              <p class="text-[10px] text-slate-400 truncate max-w-xs">${p.dest}</p>
            </div>
          </div>
          <button onclick="transferPackage(this, 'toPending')" class="w-7 h-7 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-400 hover:text-rose-600 flex items-center justify-center text-xs transition" title="Remover de la ruta">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `).join('');
    }

    function renderMeters() {
      const totalKg = assignedPackages.reduce((acc, p) => acc + p.kg, 0);
      const totalM3 = assignedPackages.reduce((acc, p) => acc + p.m3, 0);

      const kgPct = Math.min(100, Math.round((totalKg / vehicleCapacity.maxKg) * 100));
      const m3Pct = Math.min(100, Math.round((totalM3 / vehicleCapacity.maxM3) * 100));

      document.getElementById('weightStats').textContent = `${totalKg.toFixed(1)} kg / ${vehicleCapacity.maxKg} kg (${kgPct}%)`;
      document.getElementById('volumeStats').textContent = `${totalM3.toFixed(2)} m³ / ${vehicleCapacity.maxM3.toFixed(1)} m³ (${m3Pct}%)`;

      const wBar = document.getElementById('weightBar');
      wBar.style.width = `${kgPct}%`;
      wBar.className = kgPct > 90 ? 'bg-rose-500 h-2 rounded-full transition-all duration-300' : 'bg-cyan-500 h-2 rounded-full transition-all duration-300';

      const vBar = document.getElementById('volumeBar');
      vBar.style.width = `${m3Pct}%`;
      vBar.className = m3Pct > 90 ? 'bg-rose-500 h-2 rounded-full transition-all duration-300' : 'bg-indigo-500 h-2 rounded-full transition-all duration-300';

      document.getElementById('stopCount').textContent = assignedPackages.length;
    }

    function updateCounts() {
      const leftCount = document.querySelectorAll('#pendingPackagesList .package-card').length;
      document.getElementById('pendingCountBadge').textContent = `${leftCount} paquetes`;
      document.getElementById('routeCountBadge').textContent = `${assignedPackages.length} paquetes`;
    }

    function filterPackagesByZone() {
      const zone = document.getElementById('zoneSelect').value;
      const cards = document.querySelectorAll('#pendingPackagesList .package-card');
      cards.forEach(c => {
        if (zone === 'ALL' || c.dataset.zone === zone) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    function transferAllToRoute() {
      const buttons = document.querySelectorAll('#pendingPackagesList .package-card:not(.hidden) button');
      buttons.forEach(btn => transferPackage(btn, 'toRoute'));
    }

    function emptyRoute() {
      while (assignedPackages.length > 0) {
        const p = assignedPackages[0];
        assignedPackages.splice(0, 1);
        returnToPending(p);
      }
      renderRouteList();
      updateCounts();
      renderMeters();
    }

    function saveRoute() {
      if (assignedPackages.length === 0) {
        alert('Debes asignar al menos 1 paquete a la hoja de ruta.');
        return;
      }
      const select = document.getElementById('vehicleSelect');
      document.getElementById('modalVehicle').textContent = select.options[select.selectedIndex].text;
      document.getElementById('modalDriver').textContent = document.getElementById('driverInput').value;
      document.getElementById('modalCount').textContent = `${assignedPackages.length} paquetes`;
      document.getElementById('successModal').classList.remove('hidden');
    }

    // Initialize
    updateVehicleCapacity();
    updateCounts();