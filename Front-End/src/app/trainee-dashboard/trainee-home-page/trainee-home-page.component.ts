import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/_models/post';
import { PostLike } from 'src/app/_models/post-like';
import { PostShare } from 'src/app/_models/post-share';
import { DataServiceService } from 'src/app/services/user/data-service.service';
import { LoginService } from 'src/app/services/login.service';
import { PostComment } from 'src/app/_models/post-comment';

@Component({
  selector: 'app-trainee-home-page',
  templateUrl: './trainee-home-page.component.html',
  styleUrls: ['./trainee-home-page.component.css'],
})
export class TraineeHomePageComponent implements OnInit {
  constructor(
    public userService: DataServiceService,
    public postService: PostsService,
    public auth:LoginService
  ) {}

  //getting this user id
  userID: number = Number(this.auth.userID());
  currentUserId = this.auth.userID();

  ////////////////////////////loading posts to newsFeed///////////////////////

  public posts: Post[] = [];
  //call this method on onInit to load all posts
  load() {
    this.postService.getAllPosts().subscribe((a) => {
      this.likeCheck();
      this.ShareCheck();
      this.getUserByID(this.userID);
      this.posts = a.reverse();
    });
  }
  newpost: Post = new Post(
    0,
    '',
    new Date(),
    this.currentUserId,
    '',
    null,
    0,
    0,0,[]
  );

  //adding a post

//remove img before posting
deletePhoto(){
  this.imageURl = "";
  this.myfile = '';
  document.getElementById("delete")?.classList.add("d-none")


}



  add() {
    //add post without photo
    if (this.myfile == '') {
      this.postService.addpost(this.newpost).subscribe((a) => {
        this.newpost.content=""
         document.getElementById("delete")?.classList.add("d-none")
        this.load();
      });
      //with photo
    } else {
      const formData = new FormData();
      formData.append('img', this.myfile, this.myfile.name);
      console.log(formData);
      console.log(this.newpost)
      this.postService
        .addPhotoPost(this.newpost.userid, this.newpost.content, formData)
        .subscribe(
          (a) => {
         document.getElementById("delete")?.classList.add("d-none")
            this.load();
            this.imageURl = "";
            this.newpost.content=""

          },
          (err) => {
            alert('make sure that you entered a content to your post');
            console.log(err)
          }
        );
    }
  }

  ngOnInit(): void {
    this.load();
    console.log(this.auth.userID())

  }

  ////////////////////////////Likes Actions ///////////////////////

  postLike: PostLike = new PostLike(0, 0);
  //like toggle

  async iconToggleLike(event: any, likedPostId: number) {
    event.target.classList.toggle('material-symbols-outlined-pressed');

    //filling postLike object to send it to server
    this.postLike.postId = likedPostId;
    this.postLike.userId = this.currentUserId;
    await this.postService.toggleLike(this.postLike).subscribe();

    this.load();
  }

  //like check
  likeCheck() {
    this.postService.getuserLikes(this.currentUserId).subscribe((a) => {
      this.x = a;
    });
  }
  //x holds the postIds that user liked
  x: number[] = [];
  //ngClass at HTML
  check(postid: number) {
    if (this.x.includes(postid)) {
      return true;
    } else {
      return false;
    }
  }

  ////////////////////////////share Actions ///////////////////////
  postshare: PostShare = new PostShare(0, 0);

  async iconToggleShare(event: any, sharedPostId: number) {
    event.target.classList.toggle('material-symbols-outlined-pressed');

    //filling postShare object to send it to server
    this.postshare.postId = sharedPostId;
    this.postshare.userId = this.currentUserId;
    await this.postService.toggleShare(this.postshare).subscribe();

    this.load();
  }

  ShareCheck() {
    this.postService.getuserShares(this.currentUserId).subscribe((a) => {
      this.y = a;
    });
  }
  y: number[] = [];

  checkShare(postid: number) {
    if (this.y.includes(postid)) {
      return true;
    } else {
      return false;
    }
  }
///////////////////////////////////////Comment/////////////////////////////////////////////////////
commentShow: boolean=false;

postcomments:PostComment[]=[]

 Dialog(postid:number){
  this.postService.getPostComment(postid).subscribe(a=>{
    this.postid=postid;
    this.postcomments=a
  })
this.commentShow=true
}
//putting post id in varible to use it in add comment
postid:number=0;
content:string=""
addComment(){
 this.postService.addComment(this.postid,this.userID,this.content).subscribe(a=>{
  this.commentShow=false;
  alert("Comment Added")
  this.load()
 })

}





///////////////////////////////////////////////////////////////////////////////////////////////////
  //////post image////
  myfile: any = '';
  imageURl: any = '';
  onchange(event: any) {
    document.getElementById("delete")?.classList.remove("d-none")
    this.myfile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      this.imageURl = reader.result;
    };
  }
  photoSrc: any = '';
  //get user photo src by user id and show it in img
  //if user has no img display defult img
  getUserByID(userID: number) {
    this.userService.getUserByID(userID).subscribe((a) => {
      this.photoSrc = 'https://fitnessarena-api20220806024507.azurewebsites.net/images/' + a.photoSrc;
      document.getElementById('pppp')?.setAttribute('src', this.photoSrc);
    });
  }
}
