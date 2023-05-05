export class Habilidad {
    public id?: number;
    public nombre?: String;
    public grado?: number;

    public constructor(init?: Partial<Habilidad>) {
        Object.assign(this, init);
    }

}