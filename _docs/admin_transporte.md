Para el **Sistema Administrador de Transporte (TMS Back-Office / Torre de Control Logística)**, la gestión operativa requiere coordinar flotas físicas, conductores certificados, zonificación territorial, consolidación de cargas y resolución de siniestros o entregas fallidas.

---

### 1. Los 6 Mantenedores Esenciales de Transporte

| # | Mantenedor / Módulo | Propósito Operativo | Entidades y Datos Clave |
| --- | --- | --- | --- |
| **1** | **Flota de Vehículos** | Registro del parque móvil de la empresa o terceros. | Patente / Placa, Tipo (Camión 3/4, Furgón, Rampla, Moto), Capacidad de carga neta (kg), Volumen útil ($m^3$), Vencimiento de revisión técnica y seguro, Estado (`Operativo`, `En Taller`, `Baja`). |
| **2** | **Conductores / Choferes** | Padrón de transportistas y operadores de ruta. | RUT / Cédula, Nombre completo, Clase de licencia (A2, A4, A5), Teléfono, Empresa (Propio o Tercero), Vehículo asignado por defecto, Calificación, Estado (`Disponible`, `En Ruta`, `Licencia`). |
| **3** | **Zonas y Coberturas Geográficas** | Definición de polígonos y tarifas zonales. | Código de zona, Nombre (ej: *Sector Oriente*, *Región V Costa*), Comunas/Ciudades asociadas, Tiempo de tránsito estándar (horas), Costo base por kg/volumen. |
| **4** | **Planificador de Rutas y Despacho** | Consolidación de encomiendas y hojas de ruta diarias. | Folio de ruta, Móvil asignado, Conductor, Total de paradas/guías, Porcentaje de llenado ($kg$ y $m^3$), Secuencia de entrega, Estado (`Borrador`, `En Reparto`, `Completada`). |
| **5** | **Monitor de Encomiendas / Guías (OT)** | Supervisión y trazabilidad de todas las órdenes en tránsito. | N° de Guía / Tracking, Remitente, Destinatario, Dirección de entrega, Zona, Intentos de entrega, Estado (`Pendiente Recolección`, `En Hub`, `En Tránsito`, `Entregado`, `Devuelto`). |
| **6** | **Tipos de Incidencia y Excepciones** | Catálogo de causales para entregas no logradas. | Código de causal, Descripción (ej: *Dirección errónea*, *Destinatario ausente*, *Bulto dañado*, *Zona peligrosa*), Acción sugerida (`Reintentar al día siguiente`, `Retorno inmediato a origen`). |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
transporte-admin/
├── assets/
│   ├── js/
│   │   ├── admin.js            # Menú lateral, filtros globales y modales
│   │   └── route-planner.js    # Transferencia de pedidos a la hoja de ruta
│   └── css/
│       └── custom.css
│
├── index.html                  # Torre de control: KPIs de flota, entregas a tiempo (%) e incidencias
│
├── mantenedores/
│   ├── vehiculos/
│   │   ├── index.html          # [READ] Listado con barras de capacidad y estado mecánico
│   │   ├── create.html         # [CREATE] Registro técnico de la unidad móvil
│   │   ├── edit.html           # [UPDATE] Modificación de capacidad, kilometraje y mantenciones
│   │   └── show.html           # [SHOW] Ficha del vehículo: revisiones, multas e historial de rutas
│   │
│   ├── conductores/
│   │   ├── index.html          # [READ] Directorio de choferes con avatar, licencia y estado
│   │   ├── create.html         # [CREATE] Formulario de alta con subida de documentos
│   │   ├── edit.html           # [UPDATE] Edición de contacto y móvil asignado
│   │   └── show.html           # [SHOW] Métricas de efectividad de entrega y viajes realizados
│   │
│   ├── zonas/
│   │   ├── index.html          # [READ] Tabla de zonas logísticas y tiempos de tránsito
│   │   ├── create.html         # [CREATE] Creación de zona y selección de comunas/ciudades
│   │   └── edit.html           # [UPDATE] Ajuste de límites y tarifas asociadas
│   │
│   ├── rutas/
│   │   ├── index.html          # [READ] Tablero de hojas de ruta del día con progress bar de entregas
│   │   ├── planificador.html   # [CREATE] Pantalla interactiva dividida: Encomiendas pendientes vs Carga del móvil
│   │   └── show.html           # [SHOW] Hoja de ruta con checklist ordenado de paradas y comprobantes POD
│   │
│   ├── ordenes-transporte/
│   │   ├── index.html          # [READ] Tabla maestra de todas las guías/paquetes en la red
│   │   ├── detail.html         # [SHOW] Trazabilidad completa con timeline de eventos y firma digital
│   │   └── reasignar-modal.html # Modal para cambiar paquete de ruta o conductor
│   │
│   └── incidencias/
│       ├── index.html          # [READ] Monitor de entregas fallidas en tiempo real
│       └── resolucion.html     # [UPDATE] Gestión de la incidencia (reprogramar o devolver)

```

---

### 3. Anatomía Detallada de los 2 Mantenedores Principales

#### A. Mantenedor de Flota de Vehículos (`/vehiculos/`)

* **Vista Listado (`index.html`):**
* **Barra superior:** Buscador por patente o número de móvil interno, filtro por Tipo (`Camión 3/4`, `Furgón`, `Moto`), filtro por Estado (`Operativo`, `En Ruta`, `Taller`) y botón primario `+ Añadir Vehículo`.
* **Columnas de la tabla:**
1. Identificador: Patente en recuadro estilizado (fuente mono, fondo blanco con borde negro tipo placa) y número de móvil interno.
2. Vehículo: Marca, Modelo y Año.
3. Tipo y Categoría (Badge gris neutro).
4. Conductor habitual asignado (Nombre y teléfono breve).
5. Capacidad útil: Carga máxima en kg y volumen en $m^3$.
6. Alertas documentales: Badge de vencimiento de revisión técnica (`Al Día` en verde o `Por Vencer < 15 días` en ámbar).
7. Estado:
* `Disponible / En Base`: `bg-emerald-50 text-emerald-700 border border-emerald-200`
* `En Ruta`: `bg-sky-50 text-sky-700 border border-sky-200`
* `Mantenimiento`: `bg-rose-50 text-rose-700 border border-rose-200`


8. Acciones: Ficha técnica, Editar y Desactivar.




* **Vista Formulario (`create.html` / `edit.html`):**
* **Bloque 1 - Datos de la Unidad:** Patente, Número de chasis (VIN), Marca, Modelo, Año, Color.
* **Bloque 2 - Parámetros de Carga:** Capacidad máxima neta en kg, Volumen útil ($m^3$), Tipo de carrocería (Refrigerada, Abierta, Furgón cerrado).
* **Bloque 3 - Legal y Mantenciones:** Fechas de vencimiento del seguro obligatorio, revisión técnica y kilometraje actual.



---

#### B. Planificador de Rutas y Despacho (`/rutas/planificador.html`)

* **Layout de Trabajo Dividido (2 Columnas Maestras):**
* **Columna Izquierda (Pool de Carga Pendiente - 50% ancho):**
* Filtro rápido por Comuna / Zona geográfica.
* Contador: "18 bultos pendientes para Zona Norte (Total: 420 kg / 3.2 m³)".
* Listado de tarjetas de encomienda: N° de guía, dirección, destinatario, peso (kg) y volumen ($m^3$), con botón o checkbox para "Subir al Móvil".


* **Columna Derecha (Camión y Hoja de Ruta - 50% ancho):**
* Selector desplegable de Móvil / Patente y Chofer disponible.
* **Medidores Visuales de Capacidad (Barras Tailwind):**
* Barra de Peso: `420 kg / 1.500 kg (28% ocupado)` en color azul.
* Barra de Volumen: `3.2 m³ / 8.0 m³ (40% ocupado)` en color violeta.


* Listado de paradas añadidas ordenadas por secuencia (Parada 1, Parada 2, Parada 3).
* Botón destacado inferior: `Generar Hoja de Ruta y Despachar`.





---

### 4. Prompt Estructurado para Antigravity

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Módulo Administrador de Transporte y Flota (TMS Back-Office):

1. Genera el archivo 'mantenedores/vehiculos/index.html':
   - Layout administrativo con Sidebar fija (260px) en 'bg-slate-900 text-slate-300' con enlaces a: Torre de Control, Flota de Vehículos, Conductores, Zonas y Tarifas, Planificador de Rutas, Guías/Tracking e Incidencias.
   - Topbar con perfil del Despachador General y selector de Centro de Distribución / Hub.
   - Encabezado con título "Gestión de Flota y Vehículos", métricas de unidades operativas vs en mantenimiento, y botón primario "+ Registrar Vehículo" que dirija a 'create.html'.
   - Filtros funcionales: Buscador de patente con debounce, selector de tipo de vehículo y selector de estado operativo.
   - Tabla responsiva estilizada con Tailwind:
     * Patente formateada en badge estilo placa patente ('font-mono font-bold bg-slate-100 border border-slate-300 px-2.5 py-1 rounded').
     * Marca, modelo y año.
     * Tipo de unidad con badge sutil.
     * Conductor asignado actual.
     * Capacidad técnica (kg y m³).
     * Estado operativo (badges contextuales verde, azul y rojo con ring Tailwind).
     * Columna de acciones (Ver ficha, Editar, Suspender).
   - Modal de confirmación para enviar vehículo a taller/mantenimiento con selector de causa y fecha estimada de retorno, manipulado por JavaScript nativo.

2. Genera el archivo 'mantenedores/rutas/planificador.html':
   - Interfaz en grid de 2 columnas ('grid grid-cols-1 lg:grid-cols-2 gap-6'):
     * Columna 1 (Carga pendiente): Filtro por zona, lista de tarjetas compactas de encomiendas pendientes con checkbox, peso, volumen y dirección.
     * Columna 2 (Armado de ruta): Select de chofer y patente, dos barras de progreso en Tailwind que simulen el porcentaje de ocupación en peso y volumen al seleccionar ítems, y botón de acción principal "Aprobar y Emitir Hoja de Ruta".

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para abrir/cerrar modales y simular la asignación de carga.

```