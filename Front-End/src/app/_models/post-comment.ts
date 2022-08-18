export class PostComment {
  constructor(
    public fname: string,
    public lname: string,
    public content: string,
    public type:string,
    public postId:number,
    public PhotoSrc:string
  ){}
}
