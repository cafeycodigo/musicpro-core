# Especificación de Requisitos del Software - Tarjeta Fintech

Especificación de requerimientos funcionales, no funcionales, de interfaz y componentes para el subsistema **Tarjeta Fintech**.

---

## 1. Requerimientos Funcionales (RF-TAR)

| ID | Nombre Requisito | Descripción Funcional Detallada | Prioridad |
| :--- | :--- | :--- | :---: |
| **RF-TAR-01** | **Visualización de Tarjeta Virtual** | Renderizar en 3D/Glassmorphism el plástico virtual con enmascaramiento de PAN (`•••• •••• •••• 4589`) y toggle de seguridad para revelar el código CVV dinámico. | Alta |
| **RF-TAR-02** | **Simulador de Avances** | Permitir la simulación dinámica de avances en efectivo seleccionando monto y cuotas (3 a 36), calculando interés mensual, comisión y CAE. | Alta |
| **RF-TAR-03** | **Evaluación de Riesgo Antifraude** | El motor debe asignar una puntuación de riesgo (0 a 100) a cada transacción basándose en reglas como comercio sospechoso, horario y ubicación IP. | Alta |
| **RF-TAR-04** | **Reversa de Transacción** | Permitir a los auditores la anulación y reversa inmediata de cobros con generación automática de nota de crédito. | Alta |
| **RF-TAR-05** | **Programa de Puntos** | Acumulación de puntos por cada compra procesada y módulo para canje directo por instrumentos o giftcards. | Media |
| **RF-TAR-06** | **Transferencias de Saldos** | Transferencia inmediata de fondos a cuentas bancarias de terceros previa confirmación de seguridad. | Alta |
| **RF-TAR-07** | **Emisión de Plásticos** | Evaluación crediticia por RUT, asignación de cupo nacional/internacional y emisión de tarjetas Gold, Platinum o Black. | Alta |

---

## 2. Requerimientos No Funcionales (RNF-TAR)

| ID | Requisito | Criterio de Medición / Validación |
| :--- | :--- | :--- |
| **RNF-TAR-01** | **Validación Algoritmo Luhn** | Todo número de tarjeta (PAN) ingresado debe ser verificado usando la fórmula de checksum Luhn en cliente. |
| **RNF-TAR-02** | **Formato Moneda** | Presentar valores monetarios según formato local `$ 1.250.000` (CLP) o `USD $ 890.00` (USD). |
| **RNF-TAR-03** | **Impresión de Vouchers** | La vista `voucher.html` debe contar con formato limpio de impresión mediante `@media print`. |

---

## 3. Requerimientos de Interfaz de Usuario (UI/UX)

* **Paleta de Colores:** Fondo Slate Oscuro (`bg-slate-900`), Acentos Amber/Dorado (`#f59e0b`), Rose para alertas de fraude.
* **Componentes Visuales:**
  * `.credit-card-plastic`: Plástico crediticio con textura metalizada y chip EMV dorado.
  * `.risk-meter-bar`: Barra de nivel de riesgo con código de colores según nivel de severidad.
  * `input[type="range"].fintech-slider`: Slider personalizado para simulaciones financieras.

---

## 4. Requerimientos de Componentes del Software

```text
Tarjeta/assets/
├── css/
│   ├── components.css        <-- Estilos de tarjeta plástica, chip y sliders
│   ├── admin/*.css           <-- Estilos dedicados para las 12 vistas admin
│   └── cliente/*.css         <-- Estilos dedicados para las 10 vistas cliente
└── js/
    ├── components.js         <-- Objeto global TarjetaFintech y formateadores CLP/USD
    ├── admin/*.js            <-- Lógica interactiva de las 12 vistas admin
    └── cliente/*.js          <-- Lógica interactiva de las 10 vistas cliente
```
