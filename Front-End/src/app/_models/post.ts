import { PostComment } from "./post-comment";

export class Post {
  constructor(
    public postId: number,
    public content: string,
    public postDate: Date,
    public userid: number,
    public photoSrc: string,
    public user:any|null,
    public numberOfLikes:number,
    public numberOfShares:number,
    public numberOfComments:number,
    public postsComments:PostComment[]


  ) {}

}
