
export class TarjetaModel {
    public id: number = 0;
    public titulo: string = "";
    public descripcion: string = "";
    public imagen: string = "";
  
    constructor(
        _titulo: string = "",
        _descripcion: string = "",
        _imagen: string = "",
    ) {
        this.titulo = _titulo;
        this.descripcion = _descripcion;
        this.imagen = _imagen;
    }
}