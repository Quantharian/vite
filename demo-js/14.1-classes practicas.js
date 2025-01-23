class Company {
    nif;
    name;
    constructor(nif, name) {
        this.nif = nif;
        this.name = name;
    }
}

class Invoice {
    static #brand = new Company('A12345678', 'Mi empresa');
    static #lastID = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++Invoice.#lastID);
        return id;
    }
    static {
        console.log('Load class INVOICE');
    }

    //declaración de propiedades preferiblemente privadas
    #id = Invoice.#getID();
    #client;
    #concepto;
    #conceptos;
    #cantidad;
    #precioUnitario;
    #iva;

    constructor(client = '', concepto, cantidad, precioUnitario, iva = 1.21) {
        this.#concepto = concepto;
        this.#conceptos = [concepto, precioUnitario, iva]; // añadir conceptos},
        this.#cantidad = cantidad;
        this.#precioUnitario = precioUnitario;
        this.#iva = iva;
        this.#client = client;
    }

    printInvoice() {
        const total = this.#precioUnitario * this.#cantidad;
        const totalIVA = total * this.#iva;
        const factura = `
        ${Invoice.#brand.name}
        NIF: ${Invoice.#brand.nif}
        Factura número: ${this.#id}
        --------------------------------
        Cliente: ${this.#client.name}
        NIF: ${this.#client.nif}
        --------------------------------
        ${this.#concepto} + ${this.#cantidad} unidades a ${this.#precioUnitario}€.......
        Total.........${total}€
        --------------------------------
        Total con IVA........${totalIVA.toFixed(2)}€
        `;
        console.log(factura);
    }
}

const client1 = new Company('B12345678', 'Cliente 1');
const client2 = new Company('B87654321', 'Cliente 2');
const client3 = new Company('B12348765', 'Cliente 3');
const invoice1 = new Invoice(client1, 'Ordenador', 1, 1000);
const invoice2 = new Invoice(client2, 'Movil', 2, 500);
const invoice3 = new Invoice(client3, 'Brick de leche', 6, 1.2, 1.04);
const invoice4 = new Invoice(client3, ['Brick de leche', 6, 1.2], 1.04);

console.log(invoice1, invoice2);

invoice1.printInvoice();
invoice2.printInvoice();
invoice3.printInvoice();

// // -Diversos conceptos
// // - La posibilidad de añadirlos mediante un método
// // - Se refleja todo al imprimir la factura
