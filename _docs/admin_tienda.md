Para el **Sistema Administrador de Tienda (E-Commerce / POS Back-Office)**, la operación comercial exige **6 mantenedores (CRUDs)** indispensables para controlar catálogo, promociones, ventas y despacho.

---

### 1. Los 6 Mantenedores Esenciales de Tienda

| # | Mantenedor / Módulo | Propósito Operativo | Entidades y Datos Clave |
| --- | --- | --- | --- |
| **1** | **Catálogo de Productos** | Gestión comercial de ítems en venta. | SKU, Nombre, Slug, Descripción, Precio lista, Precio oferta, Stock comercial, Variantes (Talla/Color), Estado (`Publicado`/`Borrador`). |
| **2** | **Categorías y Colecciones** | Organización visual y filtros del front comercial. | Nombre, Slug, Categoría padre, Imagen de banner, Orden de prioridad, Destacado en home (`true`/`false`). |
| **3** | **Gestión de Órdenes / Ventas** | Ciclo de vida de los pedidos entrantes. | ID Orden, Cliente, Fecha, Total pagado, Método de pago, Estado de preparación (`Pendiente`, `Pagado`, `Empacando`, `Despachado`). |
| **4** | **Cupones y Descuentos** | Reglas de promociones y fidelización. | Código cupón, Tipo (% o monto fijo), Valor descuento, Compra mínima, Límite total de usos, Límite por usuario, Fecha inicio/fin. |
| **5** | **Clientes / Compradores** | Base de datos de usuarios registrados. | Nombre completo, RUT/ID, Correo, Teléfono, Total gastado histórico, Cantidad de órdenes, Estado (`Activo`/`Bloqueado`). |
| **6** | **Tarifas y Métodos de Despacho** | Costos de envío asociados a ubicaciones. | Nombre servicio (Express, Normal), Región/Comuna, Costo base, Envío gratis sobre $X, Tiempo estimado (días hábiles). |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
tienda-admin/
├── assets/
│   ├── js/
│   │   ├── admin.js            # Control de modales, sidebar y tooltips
│   │   └── variants.js         # Lógica para agregar variantes (Talla/Color/Precio)
│   └── css/
│       └── custom.css
│
├── index.html                  # Dashboard con KPIs de venta diaria y ticket promedio
│
├── mantenedores/
│   ├── productos/
│   │   ├── index.html          # [READ] Tabla con miniatura, precios, stock y switch activo/inactivo
│   │   ├── create.html         # [CREATE] Formulario con carga de imágenes y tabla de variantes
│   │   ├── edit.html           # [UPDATE] Edición de precios, fotos y stock
│   │   └── show.html           # [SHOW] Vista previa de ficha técnica y métricas de venta del ítem
│   │
│   ├── categorias/
│   │   ├── index.html          # [READ] Listado con árbol jerárquico y banners
│   │   ├── create.html         # [CREATE] Alta de categoría con selector padre
│   │   └── edit.html           # [UPDATE] Modificación de enlaces y posición
│   │
│   ├── ordenes/
│   │   ├── index.html          # [READ] Listado con pestañas de estado (Nuevas, Pagadas, Despachadas)
│   │   └── detail.html         # [SHOW/UPDATE] Ficha del pedido, selector de estado y botón imprimir boleta
│   │
│   ├── cupones/
│   │   ├── index.html          # [READ] Tabla con barra de progreso de usos vs límite
│   │   ├── create.html         # [CREATE] Generador de cupón y reglas de descuento
│   │   └── edit.html           # [UPDATE] Edición de vigencia y cupos
│   │
│   ├── clientes/
│   │   ├── index.html          # [READ] Directorio de compradores con total facturado
│   │   └── show.html           # [SHOW] Perfil del cliente con historial de compras
│   │
│   └── envios-tarifas/
│       ├── index.html          # [READ] Tabla de coberturas y precios de envío
│       └── form-modal.html     # Modal de alta de tarifa por zona geográfica

```

---

### 3. Anatomía Detallada del Mantenedor Principal: Productos (`/productos/`)

* **Vista Listado (`index.html`):**
* **Barra superior:** Buscador por nombre o SKU, filtro por Categoría, filtro por Disponibilidad (`En stock`, `Poco stock`, `Sin stock`) y botón primario azul `+ Nuevo Producto`.
* **Columnas de la tabla:**
1. Miniatura (50x50px redondeada con fondo neutro).
2. Información básica: Título comercial y SKU secundario en texto gris tenue.
3. Categoría asociada (Badge en `bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded`).
4. Precio Lista vs. Precio Oferta (tachado sutil para el valor anterior).
5. Stock disponible.
6. Switch interactivo Tailwind para visibilidad en tienda (`bg-emerald-500` si está activo, `bg-slate-300` si está oculto).
7. Acciones: Botones compactos para Ver, Editar y Eliminar (con modal).




* **Vista Formulario (`create.html` / `edit.html`):**
* **Columna Izquierda (Principal - 2/3 ancho):**
* Título del producto y descripción larga (editor WYSIWYG / textarea estilizado).
* Galería multimedia: Zona Drag & Drop con borde punteado (`border-2 border-dashed border-slate-300 rounded-xl p-8 text-center`) y preview de miniaturas.
* Módulo de Variantes: Switch para activar "¿Tiene variantes?". Si está activo, despliega una matriz para combinar tallas (S, M, L, XL) y colores con precios y stock específicos por combinación.


* **Columna Derecha (Lateral - 1/3 ancho):**
* Estado de publicación: Dropdown (`Publicado`, `Borrador`, `Archivado`).
* Organización: Selector de categoría principal y tags/etiquetas.
* Precios e Impuestos: Input de Precio de venta, Precio de comparación (oferta) y toggle "¿Cobrar IVA sobre este producto?".
* Inventario: SKU base, Código de barras, y casilla "Continuar vendiendo cuando se agote".





---

### 4. Prompt Estructurado para Antigravity

Copia y entrega este bloque a tu entorno de desarrollo para construir el mantenedor de productos:

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Mantenedor de Productos para el Administrador de Tienda (E-Commerce):

1. Genera el archivo 'mantenedores/productos/index.html':
   - Layout administrativo con Sidebar lateral izquierda fija (260px) en 'bg-slate-900 text-slate-300' con enlaces a: Dashboard, Productos, Categorías, Órdenes, Cupones, Clientes y Despachos.
   - Topbar con perfil de Administrador y botón de "Ver Tienda Pública".
   - Encabezado con título "Catálogo de Productos", métrica total de ítems y botón primario azul "+ Crear Producto" vinculado a 'create.html'.
   - Filtros funcionales: Buscador de texto, select de categorías y select de estado de stock.
   - Tabla responsiva con: Miniatura (img), Título/SKU, Categoría, Precio de venta, Stock, Toggle Switch de estado (Visible/Oculto) y botones de acción (Ver, Editar, Eliminar).
   - Modal de confirmación de eliminación con Tailwind (alerta roja de borrado permanente) controlado por JavaScript nativo.

2. Genera el archivo 'mantenedores/productos/create.html':
   - Layout en grid de 2 columnas (2/3 formulario principal, 1/3 barra lateral de publicación).
   - Zona de subida de imágenes drag & drop estilizada.
   - Inputs con diseño Tailwind moderno ('border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500').
   - Sección de precios (Precio lista y Precio descuento) y selector de stock.
   - Botón primario "Publicar Producto" y botón secundario "Guardar como Borrador".

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript Vanilla para los eventos y modales.

```