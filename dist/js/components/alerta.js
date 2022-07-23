export class Alerta {
    constructor(_nome) {
        this._nome = _nome;
    }
    get saldacao() {
        return alert(`Olá ${this._nome}`);
    }
}
