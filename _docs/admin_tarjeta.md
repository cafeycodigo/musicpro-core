Para el **Sistema Administrador de Tarjetas (Plataforma Financiera / Fidelización / Back-Office)**, la operación exige controles estrictos de seguridad, emisión, evaluación de crédito y monitoreo de fraudes.

---

### 1. Los 6 Mantenedores Esenciales de Tarjeta

| # | Mantenedor / Módulo | Propósito Operativo | Entidades y Datos Clave |
| --- | --- | --- | --- |
| **1** | **Directorio de Cuentas y Tarjetahabientes** | Base consolidada de clientes con productos asignados. | ID Cliente, RUT / Cédula, Nombre completo, Nivel de riesgo crediticio, Cupo total aprobado, Deuda facturada, Estado (`Al Día`, `Mora`, `Bloqueada`). |
| **2** | **Emisión de Plásticos / Tarjetas** | Creación y entrega de tarjetas físicas o virtuales. | Número enmascarado (`BIN + **** + 4 últimos dígitos`), Tipo (Clásica, Gold, Black), Fecha de emisión, Expiración, Estado (`Emitida`, `Activa`, `Extraviada`, `Cancelada`). |
| **3** | **Planes y Productos Financieros** | Reglas de negocio y condiciones comerciales. | Nombre plan, Tasa de interés mensual (TNA/CAE), Comisión de mantención mensual, Cupo mínimo/máximo permitido, Factor de acumulación de puntos por dólar/peso gastado. |
| **4** | **Transacciones y Operaciones** | Auditoría y control de cargos y abonos. | ID Transacción, Fecha/hora, RUT cliente, Tarjeta asociada, Tipo (`Compra`, `Avance`, `Pago de cuota`, `Abono manual`), Comercio / Terminal, Monto, Estado (`Aprobada`, `Rechazada`, `Reversada`). |
| **5** | **Reglas de Riesgo y Control de Fraude** | Detección automática y prevención de incidentes. | Nombre de regla, Tipo de evento (Monto sobre umbral, Compras internacionales sin aviso, Múltiples intentos de PIN fallidos), Nivel de severidad (Bajo, Medio, Crítico), Acción automática (`Alertar`, `Bloquear tarjeta temporal`). |
| **6** | **Catálogo de Beneficios y Canje** | Gestión del programa de lealtad y puntos. | Nombre beneficio/premio, Proveedor/Aliado comercial, Puntos requeridos, Stock disponible de cupones/premios, Fecha de vigencia. |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
tarjeta-admin/
├── assets/
│   ├── js/
│   │   ├── admin.js            # Control de sidebar, modales de confirmación y alertas
│   │   └── formatters.js       # Formato de RUT/Cédula, moneda local y máscaras de tarjeta
│   └── css/
│       └── custom.css
│
├── index.html                  # Dashboard con KPIs financieros (Colocación total, Mora %, Transacciones 24h)
│
├── mantenedores/
│   ├── cuentas/
│   │   ├── index.html          # [READ] Tabla de clientes con barra de búsqueda por RUT y filtros de riesgo
│   │   ├── create.html         # [CREATE] Registro y apertura de línea de crédito a cliente
│   │   ├── edit.html           # [UPDATE] Modificación de cupo, datos de facturación y límites
│   │   └── show.html           # [SHOW] Ficha integral del cliente: contratos, tarjetas asociadas y resumen financiero
│   │
│   ├── tarjetas/
│   │   ├── index.html          # [READ] Listado de plásticos emitidos con filtros por estado y categoría
│   │   ├── emitir.html         # [CREATE] Wizard para emitir nueva tarjeta (asignación de BIN, chip y límite)
│   │   └── modal-bloqueo.html  # Modal de bloqueo preventivo inmediato (Fraude, Robo, Mora)
│   │
│   ├── planes/
│   │   ├── index.html          # [READ] Grid de tarjetas con los planes activos (Classic, Gold, Black)
│   │   ├── create.html         # [CREATE] Alta de plan: tasas, costos de mantención y cupos
│   │   └── edit.html           # [UPDATE] Actualización de parámetros y beneficios del plan
│   │
│   ├── transacciones/
│   │   ├── index.html          # [READ] Monitor en vivo de transacciones con badges de aprobación/rechazo
│   │   ├── show.html           # [SHOW] Ficha técnica del movimiento (código de autorización, terminal, IP)
│   │   └── reversa-modal.html  # Modal de autorización para reversar o anular un cargo
│   │
│   ├── fraude-reglas/
│   │   ├── index.html          # [READ] Listado de reglas activas y umbrales de alerta
│   │   ├── create.html         # [CREATE] Nueva regla de monitoreo de riesgo
│   │   └── edit.html           # [UPDATE] Edición de sensibilidad y umbrales
│   │
│   └── beneficios/
│       ├── index.html          # [READ] Catálogo de premios y alianzas comerciales
│       ├── create.html         # [CREATE] Alta de nuevo beneficio para canje de puntos
│       └── edit.html           # [UPDATE] Ajuste de stock de premios y vigencia

```

---

### 3. Anatomía Detallada de los 2 Mantenedores Principales

#### A. Mantenedor de Cuentas y Clientes (`/cuentas/`)

* **Vista Listado (`index.html`):**
* **Barra superior:** Buscador por RUT/Cédula o Nombre, filtro desplegable por Clasificación de Riesgo (`Bajo`, `Medio`, `Alto`), filtro por Estado (`Activo`, `Moroso`, `Suspendido`) y botón destacado `+ Nueva Cuenta / Línea`.
* **Columnas de la tabla:**
1. Identificación: RUT / Cédula y Nombre completo del titular.
2. Producto activo: Badge estilizado (`Classic`, `Gold`, `Black`).
3. Cupo Total Aprobado vs. Cupo Utilizado (con barra de progreso visual en Tailwind).
4. Saldo adeudado actual / Próximo vencimiento.
5. Estado:
* `Al Día`: `bg-emerald-50 text-emerald-700 border border-emerald-200`
* `En Mora`: `bg-rose-50 text-rose-700 border border-rose-200`
* `Bloqueada`: `bg-amber-50 text-amber-700 border border-amber-200`


6. Acciones: Botón Ver ficha (`show.html`), Editar cupo (`edit.html`) y Botón de Alerta de Bloqueo.




* **Vista Detalle (`show.html`):**
* **Cabecera:** Datos demográficos, score de crédito y estado general.
* **Módulo de Plásticos Activos:** Mini-cards que representan las tarjetas activas de la persona con sus últimos 4 dígitos y fecha de caducidad.
* **Tabla consolidada de últimas operaciones:** Movimientos recientes con filtro de fecha.



---

#### B. Mantenedor de Transacciones y Control de Fraude (`/transacciones/`)

* **Vista Listado / Monitor en Vivo (`index.html`):**
* **KPIs superiores en tiempo real:** Volumen total operado hoy, Total de transacciones aprobadas, Tasa de rechazos (%), Alertas de riesgo abiertas.
* **Columnas de la tabla:**
1. Timestamp (Fecha y Hora exacta con segundos).
2. `# Autorización` / Código interno de transacción.
3. Tarjeta (`•••• 8821`) y Titular.
4. Comercio / Rubro (ej: *Supermercado Central*, *Streaming Service*).
5. Monto operado y número de cuotas.
6. Score de Riesgo (Tag numérico de 1 a 100: Verde < 30, Amarillo 31-70, Rojo > 70).
7. Estado: `Aprobada`, `Rechazada (Fondos insuficientes)`, `Rechazada (Riesgo)`, `Reversada`.
8. Acciones: Botón "Detalle Técnico" y botón "Reversar Transacción".





---

### 4. Prompt Estructurado para Antigravity

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Módulo Administrador de Tarjetas y Cuentas para el Sistema Financiero:

1. Genera el archivo 'mantenedores/cuentas/index.html':
   - Layout administrativo con Sidebar fija (260px) en 'bg-slate-900 text-slate-300' con navegación a: Dashboard Financiero, Directorio de Cuentas, Emisión de Tarjetas, Planes, Transacciones, Reglas de Fraude y Beneficios.
   - Topbar con perfil del operador de finanzas y badge de entorno "Producción / Backoffice".
   - Encabezado con título "Directorio de Cuentas y Tarjetahabientes" y botón primario "+ Nueva Apertura" que vincule a 'create.html'.
   - Filtros funcionales con Tailwind: input de búsqueda por RUT/Cédula, selector de tipo de tarjeta y selector de estado (Al Día, Mora, Bloqueada).
   - Tabla responsiva con: RUT/Titular, Tipo de Tarjeta, Línea de Crédito vs Cupo Usado (con barra de progreso Tailwind estilizada), Estado (badges con ring y colores contextuales) y columna de acciones.
   - Modal de bloqueo preventivo por riesgo con selector de causal (Pérdida, Sospecha de Fraude, Mora grave) e interactividad en JS Vanilla.

2. Genera el archivo 'mantenedores/cuentas/create.html':
   - Formulario de evaluación y apertura dividido en 3 secciones en tarjetas 'bg-white rounded-xl border border-slate-200 p-6':
     1. Datos del Solicitante (RUT, Nombre, Correo, Renta mensual demostrable).
     2. Parámetros de la Línea (Selección de Plan: Classic/Gold/Black, Cupo solicitado, Tasa aplicable).
     3. Emisión Inicial (Opción para emitir tarjeta virtual inmediata o solicitar plástico físico).
   - Inputs estilizados con 'border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500'.
   - Botón de confirmación "Aprobar y Crear Cuenta" y botón secundario "Cancelar".

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para abrir y cerrar el modal.

```