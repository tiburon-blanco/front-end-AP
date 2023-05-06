export class Login {
    public email?: String;
    public password?: String;
    

    public constructor(init?: Partial<Login>) {
        Object.assign(this, init);
    }

}