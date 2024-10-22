class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    informazione(){
        return 'informazioni della vettura'
    }

    calcolaEta(){
        const date = new Date();
        const eta = date.getFullYear() - this.anno;
        return eta
        
    }
}

const fiat = new Veicolo('Fiat', 2019, 'Blue', 2, 'Gasolina');
const fiatEta = fiat.calcolaEta();
const fiatInfo = fiat.informazione();
console.log(fiat, fiatEta, fiatInfo);


