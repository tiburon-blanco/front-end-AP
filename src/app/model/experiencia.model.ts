export class Experiencia {
    public id?: number;
    public logo?: String;
    public empresa?: String;
    public puesto?: String;
    public desde?: string;
    public hasta?: string;
    public descripcion?: string;

    public constructor(init?: Partial<Experiencia>) {
        Object.assign(this, init);
    }

}