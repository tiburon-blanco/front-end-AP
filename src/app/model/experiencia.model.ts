export class Experiencia {
    public id?: number;
    public logo: String;
    public empresa: String;
    public puesto: String;
    public desde: string;
    public hasta: string;
    public descripcion: string;

    constructor(logo: String, empresa: String, puesto: String, desde: string, hasta: string, descripcion: string) {
        this.logo = logo;
        this.empresa = empresa;
        this.puesto = puesto;
        this.desde = desde;
        this.hasta = hasta
        this.descripcion = descripcion;
    }

}