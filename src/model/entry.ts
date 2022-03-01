export class Entry{
    constructor(
        public id:number,
        public date:Date,
        public description:string,
        public amount:number,
        public type:boolean,
        public balance:number
    ){}
}