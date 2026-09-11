
Para que el **Sistema Administrador de Bodega (WMS Back-Office)** sea robusto y cubra la operación física completa, necesita **6 mantenedores (CRUDs)** esenciales.

A continuación tienes el desglose exacto de cada mantenedor (campos, vistas y validaciones) y la **estructura de archivos HTML + Tailwind** lista para pasarle a Antigravity.

---

### 1. Los 6 Mantenedores Esenciales de Bodega

| # | Mantenedor / Módulo | Propósito Operativo | Entidades y Datos Clave |
| --- | --- | --- | --- |
| **1** | **Maestro de Artículos (SKUs)** | Catálogo central de productos almacenables. | SKU, Código de barras (EAN-13), Descripción, Categoría, Unidad de medida (Unidad, Caja, Pallet), Stock mínimo, Stock crítico, Dimensiones (cm) y Peso (kg). |
| **2** | **Ubicaciones Físicas** | Mapeo del almacén para almacenamiento y picking. | Código de ubicación (`P01-R02-N3` = Pasillo-Rack-Nivel), Tipo de zona (Seco, Frío, Inflamable, Alto valor), Peso máx soportado, Volumen máx ($m^3$) y Estado. |
| **3** | **Categorías y Familias** | Clasificación jerárquica de inventario. | Código familia, Nombre, Descripción, Requiere refrigeración (Sí/No), Estado activo/inactivo. |
| **4** | **Proveedores** | Origen de las entradas y abastecimiento. | RUT / Tax ID, Razón social, Contacto comercial, Teléfono, Correo, Dirección de despacho, Días de crédito. |
| **5** | **Motivos de Ajuste y Merma** | Justificación reglamentaria de alteraciones de stock. | Código motivo, Tipo de movimiento (`Entrada` / `Salida`), Nombre (ej: Rotura, Vencimiento, Descuadre en conteo), Requiere autorización de jefatura (Sí/No). |
| **6** | **Gestión de Pasillos / Zonas** | Configuración macro del centro de distribución. | Nombre de nave/bodega, Código de zona, Temperatura operativa, Responsable de zona. |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind)

Cada mantenedor sigue el ciclo de vida CRUD completo subdividido en vistas limpias:

```text
bodega-admin/
├── assets/
│   ├── js/
│   │   ├── main.js             # Lógica de sidebar, modales y toggles
│   │   └── datatables.js       # Filtros y búsquedas en tablas
│   └── css/
│       └── custom.css          # Ajustes mínimos si se requieren
│
├── index.html                  # Dashboard KPIs principales
│
├── mantenedores/
│   ├── articulos/
│   │   ├── index.html          # [READ] Tabla maestra con filtros y badges de stock
│   │   ├── create.html         # [CREATE] Formulario con datos logísticos y de stock
│   │   ├── edit.html           # [UPDATE] Edición de umbrales y datos técnicos
│   │   └── show.html           # [SHOW] Ficha técnica, ubicación física y Kardex
│   │
│   ├── ubicaciones/
│   │   ├── index.html          # [READ] Mapa de racks con % de ocupación
│   │   ├── create.html         # [CREATE] Alta de posiciones (Pasillo, Rack, Nivel)
│   │   └── edit.html           # [UPDATE] Modificación de límites y estado
│   │
│   ├── categorias/
│   │   ├── index.html          # [READ] Tabla de categorías y familias
│   │   ├── create.html         # [CREATE] Nueva categoría
│   │   └── edit.html           # [UPDATE] Edición de familia
│   │
│   ├── proveedores/
│   │   ├── index.html          # [READ] Directorio de proveedores
│   │   ├── create.html         # [CREATE] Registro de proveedor
│   │   ├── edit.html           # [UPDATE] Modificación de datos
│   │   └── show.html           # [SHOW] Historial de recepciones del proveedor
│   │
│   └── motivos-ajuste/
│       ├── index.html          # [READ] Catálogo de causas de merma/ajuste
│       └── form-modal.html     # Modal unificado Crear/Editar
│
└── operaciones/                # Flujos transaccionales (Consumen los mantenedores)
    ├── recepcion/              # Entradas vinculadas a Proveedores y Artículos
    ├── picking/                # Salidas y preparación de pedidos
    └── ajustes/                # Registro de mermas usando los Motivos de Ajuste

```

---

### 3. Anatomía Detallada de los 2 Mantenedores Principales

#### A. Mantenedor de Artículos (`/articulos/`)

* **Vista Listado (`index.html`):**
* **Barra de acción:** Input con debounce para buscar por SKU o descripción, selector desplegable de categoría, selector de estado de stock (`Todos`, `Crítico`, `Agotado`, `Óptimo`) y botón primario azul `+ Nuevo Artículo`.
* **Columnas de la tabla:**
1. Imagen miniatura (64x64 con fallback visual).
2. SKU & Código EAN.
3. Descripción del artículo.
4. Categoría (Badge gris tenue).
5. Ubicación primaria asignada.
6. Stock físico vs. Reservado.
7. Badge de estado:
* `Óptimo`: `bg-emerald-50 text-emerald-700 border-emerald-200`
* `Crítico`: `bg-amber-50 text-amber-700 border-amber-200`
* `Sin Stock`: `bg-rose-50 text-rose-700 border-rose-200`


8. Menú de acciones: Botones de Ver, Editar y Eliminar/Desactivar.




* **Vista Formulario (`create.html` / `edit.html`):**
* **Sección 1: Identificación básica:** Código SKU (con botón "Generar automático"), Código de barras EAN-13, Nombre comercial, Categoría (Select vinculado a Mantenedor de Categorías).
* **Sección 2: Parámetros logísticos y de almacenaje:** Unidad de medida base (`Unidad`, `Caja máster`, `Pallet`), Peso unitario (kg), Dimensiones (Largo × Ancho × Alto en cm).
* **Sección 3: Control de inventario:** Stock mínimo (punto de reorden), Stock crítico (alerta roja), Stock de seguridad, Permite despacho fraccionado (`Toggle checkbox`).



---

#### B. Mantenedor de Ubicaciones (`/ubicaciones/`)

* **Vista Listado (`index.html`):**
* **Métricas superiores:** Total de ubicaciones, Posiciones vacías, Posiciones ocupadas, Ocupación global (%).
* **Columnas de la tabla:**
1. Código de posición (Ej: `PAS-02-RACK-04-N3`).
2. Zona / Nave (Ej: `Refrigerados`, `Carga General`).
3. Capacidad de peso: `Carga actual (kg)` / `Carga máx (kg)`.
4. Barra de progreso visual de ocupación volumétrica con Tailwind (`w-full bg-slate-200 rounded-full h-2.5` y relleno progresivo en verde, amarillo o rojo).
5. Estado: `Disponible`, `Bloqueada por mantenimiento`, `Completa`.
6. Acciones (Editar, Bloquear posición, Ver artículos dentro).




* **Vista Formulario (`create.html`):**
* Campos: Selector de Pasillo (A-Z o numérico), Identificador de Rack/Estantería, Nivel de altura (1 al 5), Tipo de piso/zona, Capacidad máxima en kilogramos.



---

### 4. Prompt Estructurado para entregar a Antigravity

Puedes copiar y pegar este bloque directamente en tu entorno de desarrollo para generar el mantenedor principal:

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Mantenedor de Artículos para el Sistema Administrador de Bodega:

1. Genera el archivo 'mantenedores/articulos/index.html':
   - Layout de Dashboard con Sidebar lateral fija (260px) en 'bg-slate-900 text-slate-300' con enlaces a los mantenedores: Artículos, Ubicaciones, Categorías, Proveedores y Ajustes.
   - Topbar con perfil del Administrador y breadcrumbs de navegación.
   - Encabezado con título "Maestro de Artículos", contador total de ítems y botón destacado "+ Nuevo Artículo" que dirija a 'create.html'.
   - Barra de filtros: Buscador en tiempo real por SKU/Nombre y filtro desplegable de categoría y estado de stock.
   - Tabla responsiva con Tailwind: Miniatura, SKU, Nombre, Categoría, Ubicación, Stock Físico, Stock Disponible, Estado (badges coloreados) y botones de acción (Ver, Editar, Eliminar).
   - Modal de confirmación para desactivar o eliminar un artículo, oculto por defecto y con toggle mediante JavaScript Vanilla.

2. Genera el archivo 'mantenedores/articulos/create.html':
   - Formulario en card blanca ('bg-white border border-slate-200 rounded-xl p-6') dividido en 3 secciones: Datos Básicos, Datos Logísticos/Dimensiones y Control de Stock.
   - Inputs estilizados con 'focus:ring-2 focus:ring-blue-500 rounded-lg border-slate-300'.
   - Botón "Guardar Artículo" y botón secundario "Cancelar / Volver".

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para la interacción.

```



