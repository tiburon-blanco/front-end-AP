export class Educacion {
    public id?: number;
    public logo?: String;
    public instituto?: String;
    public nombre?: String;
    public periodo?: string;
    
    public constructor(init?: Partial<Educacion>) {
        Object.assign(this, init);
    }

}