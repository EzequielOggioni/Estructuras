export class Producto {

    public _nombre !: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(v: string) {
        this._nombre = v;
    }

    public _precio !: number;
    public get precio(): number {
        return this._precio;
    }
    public set precio(v: number) {
        this._precio = v;
    }

    public _moneda !: string;
    public get moneda(): string {
        return this._moneda;
    }
    public set moneda(v: string) {
        this._moneda = v;
    }

    public _id !: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    public _tipoProducto !: string;
    public get tipoProducto(): string {
        return this._tipoProducto;
    }
    public set tipoProducto(v: string) {
        this._tipoProducto = v;
    }

}
