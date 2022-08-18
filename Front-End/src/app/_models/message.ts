export class Message {
  /**
   *
   */
  constructor(public username:string,public message:string,public senddate:Date=new Date(),public imgurl:string,public userId:number) {

  }
}
