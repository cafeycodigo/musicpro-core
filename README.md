# MusicPro Enterprise Suite - Documentación Central

Bienvenido a la documentación oficial de la suite **MusicPro Enterprise v2.4**, una plataforma integral de gestión comercial, logística, financiera y de almacén.

---

## 🏛️ Arquitectura del Sistema

La solución está construida sobre una arquitectura **multisistema modular e independiente**, compuesta por **4 soluciones verticales de alta escala**:

```text
c:\Users\benja\Desktop\musicpro\
├── index.html                   <-- Hub principal de presentación de la suite
├── README.md                    <-- Documentación técnica general
├── requisitos.md                <-- Requisitos del software (Globales)
├── _docs/                       <-- Especificaciones y manuales de módulo
├── shared/                      <-- Componentes compartidos
│   └── modal-system.js          <-- Sistema universal de modales alert/confirm/prompt
│
├── Bodega/                      <-- Sistema 1: WMS & Gestión de Almacén
│   ├── README.md
│   ├── requisitos.md
│   ├── assets/ ({css,js}/{admin,cliente})
│   ├── admin/ (15 vistas)
│   └── cliente/ (7 vistas)
│
├── Tarjeta/                     <-- Sistema 2: Tarjetas & Fidelización Fintech
│   ├── README.md
│   ├── requisitos.md
│   ├── assets/ ({css,js}/{admin,cliente})
│   ├── admin/ (12 vistas)
│   └── cliente/ (10 vistas)
│
├── Tienda/                      <-- Sistema 3: E-Commerce & Catálogo POS
│   ├── README.md
│   ├── requisitos.md
│   ├── assets/ ({css,js}/{admin,cliente})
│   ├── admin/ (12 vistas)
│   └── cliente/ (13 vistas)
│
└── Transporte/                  <-- Sistema 4: Logística, Rutas & Envíos Courier
    ├── README.md
    ├── requisitos.md
    ├── assets/ ({css,js}/{admin,cliente})
    ├── admin/ (12 vistas)
    └── cliente/ (12 vistas)
```

---

## 📦 Resumen de Sistemas de la Suite

| Módulo | Enfoque de Negocio | Vistas Operativas / Cliente | Vistas Administrativas | Documentación |
| :--- | :--- | :---: | :---: | :---: |
| **Bodega (WMS)** | Control de inventario, recepción/despacho, racks y mermas. | 7 vistas | 15 vistas | [Ver README](Bodega/README.md) \| [Requisitos](Bodega/requisitos.md) |
| **Tarjeta Fintech** | Emisión de tarjetas virtuales, simulación de avances y fraude. | 10 vistas | 12 vistas | [Ver README](Tarjeta/README.md) \| [Requisitos](Tarjeta/requisitos.md) |
| **Tienda Store** | E-commerce, carrito reactivo, caja POS y cupones. | 13 vistas | 12 vistas | [Ver README](Tienda/README.md) \| [Requisitos](Tienda/requisitos.md) |
| **Transporte Courier**| Seguimiento de envíos, optimización de rutas y flotas. | 12 vistas | 12 vistas | [Ver README](Transporte/README.md) \| [Requisitos](Transporte/requisitos.md) |

---

## ⚡ Estructura de Activos (Assets Modular CSS y JS)

Cada proyecto implementa una separación estricta de responsabilidades en su directorio `assets/`:

1. **Estilos y Componentes Base (`assets/css/components.css`):**
   * Tokens de diseño (paletas HSL, tipografías *Plus Jakarta Sans*, *Outfit* y *Share Tech Mono*).
   * Definiciones de componentes reutilizables (modales, badges, tarjetas, tablas y notificaciones toast).
2. **Lógica y Componentes JS (`assets/js/components.js`):**
   * Namespaces dedicados (`BodegaWMS`, `TarjetaFintech`, `TiendaStore`, `TransporteExpress`).
   * Manejadores universales de modales, alertas y formateadores de datos.
3. **Archivos Dedicados por Vista:**
   * Cada vista HTML cuenta con su propio archivo `.css` y `.js` en las subcarpetas `admin/` y `cliente/` de `assets/`, garantizando páginas ultraligeras y mantenibles.

---

## 🚀 Inicio Rápido

1. Para acceder al portal principal, abre [index.html](index.html) en cualquier navegador web moderno.
2. Explora las especificaciones detalladas de los requisitos funcionales y no funcionales en [requisitos.md](requisitos.md).
