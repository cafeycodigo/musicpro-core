# Especificación de Requisitos del Software - Transporte Express

Especificación de requerimientos funcionales, no funcionales, de interfaz y componentes para el subsistema **Transporte Express**.

---

## 1. Requerimientos Funcionales (RF-TRA)

| ID | Nombre Requisito | Descripción Funcional Detallada | Prioridad |
| :--- | :--- | :--- | :---: |
| **RF-TRA-01** | **Seguimiento Secuencial (Tracking)** | Visualización del estado del paquete mediante un stepper interactivo: 1) Recolectado, 2) En Tránsito, 3) En Reparto, 4) Entregado. | Alta |
| **RF-TRA-02** | **Cotizador de Envíos** | Calculadora dinámica de costo de despacho basada en peso (kg), dimensiones (largo x ancho x alto cm) y comuna de destino. | Alta |
| **RF-TRA-03** | **Constructor de Rutas** | Módulo administrativo para transferir paquetes pendientes a una ruta, calculando ocupación de peso (kg) y volumen (m³) del vehículo elegido. | Alta |
| **RF-TRA-04** | **Impresión de Etiquetas Térmicas** | Generar etiquetas de despacho formato estándar 10x15 cm con código de barras en formato Code 128 / Libre Barcode. | Alta |
| **RF-TRA-05** | **Gestión de Flota** | Registro de vehículos con patente, modelo, tipo de combustible, capacidad volumétrica y estado de revisión. | Alta |
| **RF-TRA-06** | **Nómina de Conductores** | Registro de choferes con tipo de licencia de conducir, número de celular de contacto y vehículo asignado. | Media |
| **RF-TRA-07** | **Registro de Incidencias** | Modulo para marcar paquetes con problemas de entrega (Ej: "Dirección No Encontrada", "Cliente Ausente") y reprogramar intento. | Media |

---

## 2. Requerimientos No Funcionales (RNF-TRA)

| ID | Requisito | Criterio de Medición / Validación |
| :--- | :--- | :--- |
| **RNF-TRA-01** | **Formato Impresión Térmica** | La vista `etiqueta.html` debe forzar dimensiones exactas `100mm x 150mm` sin márgenes externos al imprimir. |
| **RNF-TRA-02** | **Código de Seguimiento Único** | Todo paquete debe contar con un identificador de seguimiento en formato monospaciado (Ej: `TRK-9823-CL`). |
| **RNF-TRA-03** | **Almacenamiento Modular** | Todo código JS de transporte debe ubicarse en `Transporte/assets/js/` y CSS en `Transporte/assets/css/`. |

---

## 3. Requerimientos de Interfaz de Usuario (UI/UX)

* **Paleta de Colores:** Fondo Slate Claro (`bg-slate-50`), Acentos Blue/Cyan (`#0284c7`), Emerald para entregados.
* **Componentes Visuales:**
  * `.tracking-stepper-node`: Nodo circular con efecto de pulso activo para indicar la ubicación actual del envío.
  * `.vehicle-capacity-meter`: Barra de progreso de carga útil del furgón o camión.
  * `.barcode-stripes`: Franjas en blanco y negro simuladas por gradiente CSS como respaldo de código de barras.

---

## 4. Requerimientos de Componentes del Software

```text
Transporte/assets/
├── css/
│   ├── components.css        <-- Estilos de stepper, barras de carga y etiquetas
│   ├── admin/*.css           <-- Estilos dedicados para las 12 vistas admin
│   └── cliente/*.css         <-- Estilos dedicados para las 12 vistas cliente
└── js/
    ├── components.js         <-- Objeto global TransporteExpress y cotizador
    ├── admin/*.js            <-- Lógica interactiva de las 12 vistas admin
    └── cliente/*.js          <-- Lógica interactiva de las 12 vistas cliente
```
