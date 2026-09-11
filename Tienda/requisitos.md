# Especificación de Requisitos del Software - Tienda Store

Especificación de requerimientos funcionales, no funcionales, de interfaz y componentes para el subsistema **Tienda Store**.

---

## 1. Requerimientos Funcionales (RF-TIE)

| ID | Nombre Requisito | Descripción Funcional Detallada | Prioridad |
| :--- | :--- | :--- | :---: |
| **RF-TIE-01** | **Catálogo Reactivo** | Filtrado en tiempo real de productos por categoría, rango de precio, marca y ordenamiento por menor/mayor precio. | Alta |
| **RF-TIE-02** | **Carrito Persistente** | El carrito de compras debe permitir modificar cantidades (+/-), eliminar ítems y calcular automáticamente subtotal, impuestos y total. | Alta |
| **RF-TIE-03** | **Aplicación de Cupones** | Módulo de cupones de descuento (ej: `MUSICPRO20`) con cálculo inmediato de rebaja en el total del carrito. | Alta |
| **RF-TIE-04** | **Flujo Checkout Multi-Paso** | Checkout dividido en 3 fases: 1) Dirección de despacho, 2) Medio de Pago / Confirmación, 3) Pantalla de Éxito con número de pedido. | Alta |
| **RF-TIE-05** | **Libreta de Direcciones** | Permitir al cliente administrar múltiples direcciones de entrega y marcar una como predeterminada. | Media |
| **RF-TIE-06** | **Gestión de Órdenes Admin** | Visualización de pedidos recibidos con cambio de estado (`Pendiente`, `Pagado`, `Preparando`, `Completado`). | Alta |
| **RF-TIE-07** | **Matriz de Tarifas de Envío** | Parametrización de costos de envío según zona geográfica y tramo de compra. | Media |

---

## 2. Requerimientos No Funcionales (RNF-TIE)

| ID | Requisito | Criterio de Medición / Validación |
| :--- | :--- | :--- |
| **RNF-TIE-01** | **Persistencia de Carrito** | El estado del carrito de compras debe conservarse en el almacenamiento local del navegador (`localStorage`). |
| **RNF-TIE-02** | **Notificación de Agregado** | Al hacer clic en "Agregar al Carrito", el sistema debe mostrar un toast de confirmación en menos de 100 ms. |
| **RNF-TIE-03** | **Formato de Precios** | Todos los valores deben formatearse automáticamente como moneda local `$ 199.990`. |

---

## 3. Requerimientos de Interfaz de Usuario (UI/UX)

* **Paleta de Colores:** Fondo Slate Claro (`bg-slate-50`), Acentos Indigo (`#4f46e5`), Violeta e Emerald.
* **Componentes Visuales:**
  * `.product-card`: Tarjeta e-commerce con efecto hover zoom en imagen y elevación de sombra.
  * `.discount-badge`: Badge degradado en rojo con porcentaje de descuento destacado.
  * `.checkout-step-indicator`: Indicador circular numérico de paso activo en la compra.

---

## 4. Requerimientos de Componentes del Software

```text
Tienda/assets/
├── css/
│   ├── components.css        <-- Estilos de tarjetas de producto, badges y checkout
│   ├── admin/*.css           <-- Estilos dedicados para las 12 vistas admin
│   └── cliente/*.css         <-- Estilos dedicados para las 13 vistas cliente
└── js/
    ├── components.js         <-- Objeto global TiendaStore y helper de carrito
    ├── admin/*.js            <-- Lógica interactiva de las 12 vistas admin
    └── cliente/*.js          <-- Lógica interactiva de las 13 vistas cliente
```
