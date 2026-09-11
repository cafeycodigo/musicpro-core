/**
 * Logica interactiva para vista puntos-red (cliente) - Transporte
 */

const pointsData = {
      1: {
        name: "Locker Inteligente Metro Tobalaba",
        address: "Av. Providencia 2653, Nivel -1 (Línea 1) • Retiro 24/7 con código QR"
      },
      2: {
        name: "Punto Blue Express Providencia Centro",
        address: "Av. Pedro de Valdivia 180, Local 4 • Acepta devoluciones y envíos frágiles"
      },
      3: {
        name: "Pick-up MusicPro Las Condes",
        address: "Av. Las Condes 9420, Mall Open Plaza • Especializado en guitarras y audio"
      },
      4: {
        name: "Punto Starken Santiago Centro",
        address: "Moneda 1140, Galería Comercial • Cierre a las 18:30 hrs"
      }
    };

    function selectPoint(id) {
      document.querySelectorAll('.point-card').forEach(c => {
        c.classList.remove('border-orange-500', 'border-2');
        c.classList.add('border-slate-200', 'border');
      });
      const selected = document.getElementById('point-card-' + id);
      if (selected) {
        selected.classList.remove('border-slate-200', 'border');
        selected.classList.add('border-orange-500', 'border-2');
      }
      const data = pointsData[id];
      if (data) {
        document.getElementById('detailName').textContent = data.name;
        document.getElementById('detailAddress').textContent = data.address;
      }
    }

    function filterPoints(type) {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-orange-50', 'text-orange-700', 'border-orange-200');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      event.target.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      event.target.classList.add('bg-orange-50', 'text-orange-700', 'border-orange-200');
    }