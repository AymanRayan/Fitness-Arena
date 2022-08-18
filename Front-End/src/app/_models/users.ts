export class Users {
    constructor(
        public type?:string,
        public birthDate?: Date,
        public fname?: string,
        public lname?: string,
        public address?: string,
        public registerDate?: Date,
        public age?: number,
        public gender?: string,
        public rating?: string,
        public photoSrc?: string,
        public categoryName?: string,
        public target?: string,
        public cardNumber?: number,
        public email?: string,
        public password?: string,
        public userId?:number
    ){}
}
