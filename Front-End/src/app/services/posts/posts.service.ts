import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/_models/post';
import { PostComment } from 'src/app/_models/post-comment';
import { PostLike } from 'src/app/_models/post-like';
import { PostShare } from 'src/app/_models/post-share';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  host = environment.commonUrl;

  constructor(public http: HttpClient) {}

  //////////////////////////post/////////////////////////////////////////////

  //add an new post withot photo
  addpost(newpost: Post) {
    return this.http.post<Post>(`${this.host}/api/posts`, newpost);
  }

  //add an new post with a photo
addPhotoPost(userID:number,postContent:string,img:any):Observable<any>{
  return this.http.post<any>(`${this.host}/api/posts/byimage?id=${userID}&content=${postContent}`, img);



}
  //get all posts
  getAllPosts() {
    return this.http.get<Post[]>(`${this.host}/api/posts`);
  }

  //////////////////////////like/////////////////////////////////////////////

  //toggle like
  toggleLike(PostLike: PostLike) {
    return this.http.post<PostLike>(`${this.host}/api/postsLikes`, PostLike);
  }

  //return ids of the post that a user likes
  getuserLikes(userID: number) {
    return this.http.get<number[]>(
      `${this.host}/api/postsLikes/getuserlikes/${userID}`
    );
  }

  /////////////////////////////share///////////////////////////////////////////

  toggleShare(PostShare: PostShare) {
    return this.http.post<PostShare>(`${this.host}/api/postsShares`, PostShare);
  }
  getuserShares(userID: number) {
    return this.http.get<number[]>(
      `${this.host}/api/postsShares/getuserShare/${userID}`
    );
  }

  /////////////////////////////comments///////////////////////////////////////////

  getPostComment(postid:number){
    return this.http.get<PostComment[]>(
      `${this.host}/api/postsComments/${postid}`);
  }


  addComment(postId:number,userId:number,content:string){
    // comment:Object =postId
    var comment:any = {
      postId: postId,
      userId:userId,
      content:content
   }
    return this.http.post<PostComment[]>(`${this.host}/api/postsComments`,comment);
  }


}
