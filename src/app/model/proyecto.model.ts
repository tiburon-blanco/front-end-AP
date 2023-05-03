export class Proyecto {
    public id?: number;
    public nombre?: String;
    public descripcion?: String;
    public fecha?: Date;
    public link?: string;

    public constructor(init?: Partial<Proyecto>) {
        Object.assign(this, init);
    }

}