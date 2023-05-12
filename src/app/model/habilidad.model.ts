export class Habilidad {
    public id?: number;
    public nombre?: String;
    public grado?: String;

    public constructor(init?: Partial<Habilidad>) {
        Object.assign(this, init);
    }

}