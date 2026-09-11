Para el **Portal de Cliente de Transporte (Modelo Blue Express / Starken)**, la interfaz debe priorizar la rapidez operativa: cotización instantánea con selector de tipo de entrega (domicilio o punto pick-up/Punto Blue), generación e impresión de etiquetas con código de barras y trazabilidad pública en tiempo real mediante un timeline gráfico.

---

### 1. Los 5 Módulos / CRUDs del Cliente de Transporte

| # | Módulo | Propósito para el Cliente | Vistas y Flujos Clave |
| --- | --- | --- | --- |
| **1** | **Cotizador y Emisión de Envíos** | Cotizar tarifas y generar órdenes de flete. | Formulario paso a paso: 1. Origen/Destino, 2. Paquete (dimensiones, peso, seguro), 3. Tipo de servicio (Express, Estándar, Punto Pick-up) y pago online. |
| **2** | **Tracking Público y Trazabilidad** | Consulta del estado de encomiendas en tránsito. | Buscador gigante por N° de orden/guía, timeline secuencial con nodos de avance, bitácora de eventos con hora exacta y mapa/placeholder de última milla. |
| **3** | **Mis Envíos (Panel de Despachos)** | Gestión centralizada de envíos emitidos y por recibir. | Tabla con pestañas (`En Tránsito`, `Entregados`, `Con Problema`), buscador por destinatario, descarga masiva de etiquetas (PDF con código de barras) y anulación. |
| **4** | **Libreta de Direcciones Frecuentes** | Acelerador de checkout para remitentes habituales. | CRUD de domicilios guardados (remitente y destinatarios frecuentes) con contacto, calle, número, depto y referencias. |
| **5** | **Puntos de Entrega y Lockers (Red Pick-up)** | Localización física de sucursales aliadas. | Buscador por comuna/ciudad, listado de tiendas de barrio/puntos pick-up con horarios de atención y botón "Enviar a este punto". |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
transporte-cliente/
├── assets/
│   ├── js/
│   │   ├── quote-calculator.js  # Cálculo de peso volumétrico y tarifas en vivo
│   │   ├── tracking-stepper.js  # Animación y actualización de estados del timeline
│   │   └── label-printer.js     # Renderizado de etiqueta de encomienda con código de barras
│   └── css/
│       └── custom.css
│
├── index.html                   # Home: Buscador central de tracking prominente y accesos rápidos
├── tracking.html                # [SHOW] Trazabilidad paso a paso con timeline y bitácora horaria
├── cotizador.html               # [CREATE] Wizard cotizador paso a paso con comparador de servicios
│
├── envios/
│   ├── index.html               # [READ] Tabla de mis despachos con filtros por estado y buscador
│   ├── detalle.html             # [SHOW] Ficha de la orden de transporte y comprobante de entrega (POD)
│   ├── etiqueta.html            # [PRINT] Vista imprimible de la etiqueta con código de barras (10x15 cm)
│   └── anular-modal.html        # Modal de cancelación de orden previa al retiro
│
├── direcciones/
│   ├── index.html               # [READ] Grid de domicilios guardados (Casa, Oficina, Bodega)
│   ├── create.html              # [CREATE] Registro de nueva dirección con autocompletado
│   └── edit.html                # [UPDATE] Edición de contacto y referencias
│
└── puntos-red/
    └── index.html               # Directorio y selector de puntos de entrega/Punto Blue

```

---

### 3. Anatomía Detallada de las Vistas Clave

#### A. Buscador de Tracking y Trazabilidad (`tracking.html`)

* **Header de Rastreo:**
* Input centralizado de búsqueda rápida: `Ingresa tu número de seguimiento (ej: BX-8834921)` con botón azul primario.


* **Tarjeta de Estado Principal (Hero Tracking):**
* Resumen superior: Número de Guía, Tipo de Servicio (`Express a Domicilio`), Destinatario (`Leonardo R.`) y Fecha estimada de entrega (`Hoy antes de las 19:00 hrs`).
* **Stepper / Timeline Horizontal (Tailwind CSS):**
* 4 Hitos visuales con iconos en círculos y líneas conectoras:
1. `Envío Creado` (Completado: círculo verde con check).
2. `En Centro de Distribución` (Completado: círculo verde).
3. `En Reparto / Última Milla` (Activo: círculo azul pulsante `animate-pulse` con furgón).
4. `Entregado` (Pendiente: círculo gris tenue).






* **Bitácora Detallada de Movimientos (Timeline Vertical):**
* Lista cronológica inversa con fecha, hora, ubicación del Hub y evento:
* `10 Sep - 08:30`: *En reparto hacia tu domicilio. Conductor: Juan P. asignado.*
* `09 Sep - 21:15`: *Ingreso a Centro Logístico Pudahuel.*
* `09 Sep - 14:00`: *Paquete recibido en Punto Blue La Florida.*




* **Comprobante de Entrega Digital (POD):**
* Espacio reservado para mostrar fotografía del paquete en la puerta y firma del receptor cuando el estado sea `Entregado`.



---

#### B. Wizard Cotizador y Emisión de Envíos (`cotizador.html`)

* **Barra de Progreso Superior:** Pasos numerados `1. Ruta` → `2. Paquete` → `3. Servicio y Pago`.
* **Paso 1 - Origen y Destino:**
* Selectores de Región y Comuna de origen vs. Comuna de destino.
* Selector tipo de retiro: "Vienen a buscarlo a mi casa" o "Lo dejo en un punto de entrega".


* **Paso 2 - Dimensiones y Peso del Paquete:**
* Selector por presets rápidos: `Sobre / Documento`, `Caja Pequeña (Zapatos)`, `Caja Mediana`, `Bulto Grande`.
* Inputs para medidas personalizadas: Peso real en kg, Largo, Ancho y Alto en cm.
* Cálculo dinámico del peso volumétrico en tiempo real con JavaScript ($(\text{Largo} \times \text{Ancho} \times \text{Alto}) / 4000$).


* **Paso 3 - Comparativa de Tarifas (Cards Seleccionables):**
* Tarjeta 1: `Entrega a Punto Pick-up` (Más económica, ej: $2.890, entrega en 48 hrs).
* Tarjeta 2: `Entrega Estándar a Domicilio` (ej: $3.990, entrega 24-48 hrs).
* Tarjeta 3: `Entrega Prioritaria Express` (Badge destacado `Más Rápido`, ej: $5.490, entrega día hábil siguiente).


* **Botón de Cierre:** "Confirmar y Generar Etiqueta".

---

#### C. Vista de Etiqueta Imprimible (`envios/etiqueta.html`)

* Maquetación en formato estándar térmico (100 mm × 150 mm) con borde negro estilizado:
* Logotipo de la empresa de transporte en cabecera.
* Código de barras en formato CSS/SVG (Code 128) con número de seguimiento legible debajo.
* Gran identificador zonal de enrutamiento (ej: `RM-STGO-SUR-04`).
* Bloque de Remitente: Nombre, comuna de origen y teléfono.
* Bloque de Destinatario: Nombre en negrita, dirección completa formateada y teléfono.
* Bloque inferior con peso facturado, fecha de emisión y número de bulto (`Bulto 1/1`).
* Botón flotante `window.print()` con estilos CSS `@media print` para ocultar botones del navegador.



---

### 4. Prompt Estructurado para Antigravity

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Portal de Cliente para el Sistema de Transporte (inspirado en el flujo y diseño de Blue Express):

1. Genera el archivo 'index.html':
   - Header con logo corporativo de transporte, enlaces a "Cotizar", "Puntos de Entrega", "Mis Envíos" y botón de inicio de sesión.
   - Hero Section con fondo azul oscuro ('bg-slate-900 text-white py-16') con un Buscador de Tracking central y destacado:
     * Input grande con bordes redondeados ('rounded-full py-4 px-6 text-slate-800 w-full max-w-xl shadow-lg') y botón "Rastrear Envío" ('bg-blue-600 hover:bg-blue-500 font-bold px-8 rounded-full').
   - Grid inferior con 3 accesos rápidos en tarjetas ('bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition'):
     * "Hacer un Envío" (Acceso directo al cotizador).
     * "Buscar Punto Pick-up" (Localizador de sucursales aliadas).
     * "Empresas y E-commerce" (Integración para tiendas).

2. Genera el archivo 'tracking.html':
   - Layout limpio que mantenga el navbar corporativo.
   - Encabezado con el número de guía buscado ('BX-99482103-CL'), estado general en badge destacado y fecha prometida de entrega.
   - Timeline Horizontal moderno con Tailwind:
     * 4 pasos: 'Creado', 'En Centro de Distribución', 'En Reparto' (con animación 'animate-pulse' y color azul), y 'Entregado'.
     * Círculos de estado con iconos SVG y barras conectoras de progreso.
   - Sección inferior dividida en 2 columnas:
     * Columna 1: Historial cronológico vertical de eventos (fecha, hora, ubicación y detalle del movimiento).
     * Columna 2: Ficha del envío con datos resumidos de remitente, comuna de destino y tipo de servicio contratado.

3. Genera el archivo 'envios/etiqueta.html':
   - Vista optimizada para impresión en formato de etiqueta térmica 10x15 cm ('max-w-md mx-auto bg-white border-2 border-slate-900 p-4 rounded-none').
   - Bloque de enrutamiento con macro-código zonal ('STGO-ORIENTE').
   - Código de barras generado mediante líneas SVG/CSS con el número de seguimiento.
   - Datos de despacho claros y botón superior no imprimible "Imprimir Etiqueta" con regla '@media print'.

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para la interactividad de búsqueda y botones de impresión.

```