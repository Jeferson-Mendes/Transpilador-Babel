// EXEMPLO
class Carro{
    constructor( finalPlaca, cor ){
        this.finalPlaca = finalPlaca
        this.cor = cor
    }
}

class Vw extends Carro{
    constructor(finalPlaca, cor, modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }
}


let car1 = new Vw( 7, 'Vermelho', 'Vw Gol', 2020)