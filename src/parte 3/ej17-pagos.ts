/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago con tarjeta de crédito por $${monto}`);
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago con transferencia por $${monto}`);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago con Mercado Pago por $${monto}`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago en efectivo por $${monto}`);

    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);
}
