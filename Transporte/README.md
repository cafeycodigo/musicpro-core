# Transporte Express - Sistema Logístico y de Envíos Courier

El subsistema de **Transporte Express** de MusicPro administra la logística de última milla, cotización de envíos, seguimiento de guías en tiempo real (tracking), optimización de rutas de despacho, gestión de flotas vehiculares e impresión de etiquetas térmicas.

---

## 📂 Estructura de Contenidos

```text
Transporte/
├── README.md                  <-- Este archivo de documentación
├── requerimientos.html        <-- Página web interactiva con 250 requisitos en tablas Tailwind
├── requisitos.md              <-- Especificación formal en Markdown (100 RF, 50 RNF, 100 RD)
├── assets/
│   ├── css/
│   │   ├── components.css    <-- Stepper de tracking, barras de carga y etiquetas térmicas
│   │   ├── admin/            <-- Estilos específicos de las 12 vistas admin
│   │   └── cliente/          <-- Estilos específicos de las 12 vistas cliente
│   └── js/
│       ├── components.js     <-- Namespace TransporteExpress, cotizador y formateadores
│       ├── admin/            <-- Controladores JS de las 12 vistas admin
│       └── cliente/          <-- Controladores JS de las 12 vistas cliente
├── admin/                     <-- Vistas administrativas (12 archivos HTML)
└── cliente/                   <-- Vistas de clientes y seguimiento (12 archivos HTML)
```

---

## 💻 Vistas del Sistema

### 1. Panel de Administración Logística (Back-Office)
* [index.html](admin/index.html): Dashboard logístico con métricas de entregas a tiempo, rutas y vehículos en ruta.
* [rutas-list.html](admin/rutas-list.html): Listado de rutas de despacho programadas por zona.
* [rutas-create.html](admin/rutas-create.html): Creador interactivo de rutas de distribución con cálculo de capacidad y m³.
* [rutas-detail.html](admin/rutas-detail.html): Hoja de ruta del conductor con itinerario ordenado de paradas.
* [vehiculos-list.html](admin/vehiculos-list.html): Control de flota vehicular (furgones, camiones, motos) y estado de mantenimiento.
* [vehiculos-create.html](admin/vehiculos-create.html): Alta de nuevo vehículo con capacidad máxima en kg y volumen.
* [vehiculos-edit.html](admin/vehiculos-edit.html): Modificación de asignación de chofer y revisión técnica.
* [conductores-list.html](admin/conductores-list.html): Nómina de choferes registrados, licencia y contacto.
* [conductores-create.html](admin/conductores-create.html): Registro de nuevo conductor con tipo de licencia A4/A5.
* [conductores-edit.html](admin/conductores-edit.html): Actualización de datos de chofer.
* [incidencias-list.html](admin/incidencias-list.html): Registro de alertas en ruta (dirección incorrecta, cliente ausente).
* [zonas-list.html](admin/zonas-list.html): Cobertura geográfica por comunas y asignación de tarifas base.

### 2. Portal de Seguimiento y Clientes (Front-Office)
* [index.html](cliente/index.html): Buscador principal de envíos con campo directo para número de guía.
* [tracking-detail.html](cliente/tracking-detail.html): Línea de tiempo secuencial en tiempo real del estado del envío.
* [envios-create.html](cliente/envios-create.html): Cotizador interactivo de despacho por peso (kg), volumen y dirección.
* [envios-list.html](cliente/envios-list.html): Mis envíos realizados con estado de entrega y comprobante.
* [envios-edit.html](cliente/envios-edit.html): Modificación de datos de contacto antes del despacho.
* [etiqueta.html](cliente/etiqueta.html): Vista de impresión de etiqueta térmica de despacho 10x15cm (4x6 in) con código de barras.
* [puntos-red.html](cliente/puntos-red.html): Mapa de puntos de retiro en red de sucursales y Pick-Up.
* [direcciones-list.html](cliente/direcciones-list.html): Direcciones de origen y destino guardadas.
* [direcciones-create.html](cliente/direcciones-create.html): Adición de nuevo punto de recolección.
* [direcciones-edit.html](cliente/direcciones-edit.html): Modificación de punto de retiro.
* [login.html](cliente/login.html): Inicio de sesión de clientes corporativos.
* [registro.html](cliente/registro.html): Registro de cuenta de cliente express.

---

## 👨‍💻 Autor & Créditos
* **Creado por:** [Bemtorres](https://github.com/Bemtorres)
* **GitHub:** [@Bemtorres](https://github.com/Bemtorres)

