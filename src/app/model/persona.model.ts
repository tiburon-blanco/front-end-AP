export class Persona {
    public id?: number;
    public profesion?: String;
    public fechaNacimiento?: String;
    public web?: String;
    public titulo?: string;
    public telefono?: string;
    public email?: string;
    public ciudad?: string;
    public disponibilidad?: string;
    public description?: string;
    
    public constructor(init?: Partial<Persona>) {
        Object.assign(this, init);
    }

}