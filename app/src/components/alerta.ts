export class Alerta{
    private _nome: string;
    constructor(_nome: string){
        this._nome = _nome;
    }
    get saldacao (){
        return alert(`Olá ${this._nome}`);
    }
}