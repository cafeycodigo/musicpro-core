# Tarjeta Fintech - Sistema Financiero y Fidelización

El subsistema de **Tarjeta Fintech** de MusicPro administra la emisión de plásticos virtuales, simulación de avances en efectivo en cuotas, transferencias entre cuentas, programa de puntos/canjes, reglas de riesgo antifraude y auditoría forense de transacciones.

---

## 📂 Estructura de Contenidos

```text
Tarjeta/
├── README.md                  <-- Este archivo de documentación
├── requisitos.md              <-- Especificación de requerimientos funcionales y no funcionales
├── assets/
│   ├── css/
│   │   ├── components.css    <-- Plásticos de tarjetas virtuales, chip EMV, sliders y riesgo
│   │   ├── admin/            <-- Estilos específicos de las 12 vistas admin
│   │   └── cliente/          <-- Estilos específicos de las 10 vistas cliente
│   └── js/
│       ├── components.js     <-- Namespace TarjetaFintech, validador Luhn y formateadores CLP/USD
│       ├── admin/            <-- Controladores JS de las 12 vistas admin
│       └── cliente/          <-- Controladores JS de las 10 vistas cliente
├── admin/                     <-- Vistas administrativas (12 archivos HTML)
└── cliente/                   <-- Vistas del titular de tarjeta (10 archivos HTML)
```

---

## 💻 Vistas del Sistema

### 1. Panel Administrativo de Riesgo y Emisión (Back-Office)
* [index.html](admin/index.html): Dashboard financiero con métricas de colocación, morosidad y saldo.
* [cuentas-list.html](admin/cuentas-list.html): Maestro de titulares, cupos otorgados y estado de tarjetas.
* [cuentas-create.html](admin/cuentas-create.html): Evaluación crediticia y emisión de nuevo plástico.
* [cuentas-edit.html](admin/cuentas-edit.html): Modificación de cupos de compra y bloqueo preventivo.
* [cuentas-detail.html](admin/cuentas-detail.html): Historial consolidado del cliente.
* [productos-tarjetas-list.html](admin/productos-tarjetas-list.html): Catálogo de plásticos (Black, Platinum, Gold).
* [productos-tarjetas-create.html](admin/productos-tarjetas-create.html): Creación de productos crediticios y tasa de interés.
* [productos-tarjetas-edit.html](admin/productos-tarjetas-edit.html): Edición de condiciones financieras.
* [transacciones-audit-list.html](admin/transacciones-audit-list.html): Monitor de cargos en tiempo real con score de riesgo.
* [transacciones-audit-detail.html](admin/transacciones-audit-detail.html): Auditoría forense de transacciones sospechosas y anulación.
* [fraude-reglas.html](admin/fraude-reglas.html): Configuración de reglas del motor antifraude.
* [beneficios-list.html](admin/beneficios-list.html): Alianzas comerciales y descuentos asociados.

### 2. Portal del Titular / Cliente (Front-Office)
* [index.html](cliente/index.html): Hub de bienvenida del titular.
* [login.html](cliente/login.html): Autenticación segura con RUT y clave pin.
* [registro.html](cliente/registro.html): Formulario de enrolamiento digital.
* [tarjeta-dashboard.html](cliente/tarjeta-dashboard.html): Dashboard con tarjeta virtual realista, saldo y toggle de CVV.
* [avance-simulador.html](cliente/avance-simulador.html): Simulador dinámico de avance en efectivo con slider y cálculo de CAE.
* [movimientos-list.html](cliente/movimientos-list.html): Cartola de movimientos y compras procesadas.
* [movimientos-detail.html](cliente/movimientos-detail.html): Detalle del comercio, ubicación y voucher.
* [transferencias-create.html](cliente/transferencias-create.html): Transferencia de fondos a cuentas bancarias con confirmación.
* [canjes-catalog.html](cliente/canjes-catalog.html): Tienda de canje de puntos acumulación MusicPoints.
* [voucher.html](cliente/voucher.html): Comprobante imprimible de transacción.
