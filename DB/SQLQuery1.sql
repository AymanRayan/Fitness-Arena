--user/trainee/coach
create table users(
userId int primary key identity(1,1),
type varchar(10) not null,
birthDate date not null,
fname varchar(20) not null,
lname varchar(20) not null,
address varchar(50),
registerDate date default getdate(),
age as(year(getdate())-year(birthDate)),
gender varchar(10) not null,
rating DECIMAL(3,2),
PhotoSrc varchar(100),
CategoryName varchar(20),
target varchar(20),
cardNumber int ,
email varchar(50) not null unique,
password varchar(50) not null,
constraint c1 check(type in ('trainee','coach')),
constraint c2 check(gender in('male' , 'female')),
)

--------------------------------------------------------------------------
--news feed
create table post(
postId int primary key identity(1,1),
content varchar(500) not null,
postDate date default getdate(), 
userid int not null,
photoSrc varchar(100),
 FOREIGN KEY (userid) REFERENCES users(userId)
)

create table postsLike(
postId int,
userId int,
likeId int primary key identity(1,1),
 FOREIGN KEY (postId) REFERENCES post(postId),
 FOREIGN KEY (userId) REFERENCES users(userId),
)

create table postsShare(
postId int,
userId int,
shareId int primary key identity(1,1),
 FOREIGN KEY (postId) REFERENCES post(postId),
 FOREIGN KEY (userId) REFERENCES users(userId),
)

 create table postsComment(
postId int,
userId int,
commentId int primary key identity(1,1),
 FOREIGN KEY (postId) REFERENCES post(postId),
 FOREIGN KEY (userId) REFERENCES users(userId),
 /*unique(postid,userId)*/
)
alter table postsComment add Content varchar(100);


create table commentLike(
 userId int,
 commentId int ,
 commentlikeId int primary key identity(1,1),
 FOREIGN KEY (userId) REFERENCES users(userId),
 FOREIGN KEY (commentId) REFERENCES postsComment(commentId),
)
--------------------------------------------------------------------------
 --payment
 create table Payments(
 paymentId int  primary key identity(1,1),
 paymentDate date default getdate(), 
 method varchar(10),
 amount int not null,
 coachId int not null,
 traineeId int not null,
 FOREIGN KEY (coachId) REFERENCES users(userId),
 FOREIGN KEY (traineeId) REFERENCES users(userId),
 )
--------------------------------------------------------------------------
 --InBody
 create table inbody(
 inbodyId int  primary key identity(1,1),
 Date date default getdate(), 
 muscle DECIMAL (4, 2),
 minerals DECIMAL (4, 2),
 proteins DECIMAL (4, 2),
 water DECIMAL (4, 2),
 weight DECIMAL(5, 2) not null,
 height int,
 traineeId int not null,
 FOREIGN KEY (traineeId) REFERENCES users(userId),
 )
 --------------------------------------------------------------------------
 --Bundles
  create table bundle(
 bundleId int  primary key identity(1,1),
 name varchar(10) not null, 
 fees int not null,
 coachId int not null,
 durationDays int not null,
 description varchar(100),
 FOREIGN KEY (coachId) REFERENCES users(userId),
 )

 create table traineeBundle(
 bundleId int,
 traineeId int, 
 subscriptionDate date default getdate(),
 expiryDate date,
 FOREIGN KEY (traineeId) REFERENCES users(userId),
 FOREIGN KEY (bundleId) REFERENCES bundle(bundleId),
 primary key (traineeId , bundleId)
 )
 

 --------------------------------------------------------------------------
 --Program
   create table programs(
 programId int  primary key identity(1,1),
 name varchar(10), 
 target varchar(10),
 progDecription varchar(100),
 coachId int not null,
 FOREIGN KEY (coachId) REFERENCES users(userId),
 )

    create table traineeprograms(
 programId int,
 traineeId int,
 traiProgID int primary key identity(1,1),
 FOREIGN KEY (traineeId) REFERENCES users(userId),
 FOREIGN KEY (programId) REFERENCES programs(programId)
 )

  --------------------------------------------------------------------------
 --workouts
  create table workout(
 workoutId int  primary key identity(1,1),
 name varchar(10), 
 targetMuscle varchar(10) not null,
 description varchar(80) ,
 )

     create table programWorkout(
 workoutId int,
 programId int,
 progWork int primary key identity(1,1),
 FOREIGN KEY (workoutId) REFERENCES workout(workoutId),
 FOREIGN KEY (programId) REFERENCES programs(programId),
 )

      create table workoutMedia(
 workoutId int primary key,
 videoUrl varchar(100),
 videoName varchar(50),
 FOREIGN KEY (workoutId) REFERENCES workout(workoutId),
 )


 ---------------last data-------------------
 /*insert into users (type ,email,password,gender,birthDate,fname,lname)
values('coach','xyz',12345,'male',GETDATE(),'as','gh');*/
/*drop table appUser
drop table bundles
drop table traineeBundels
drop table workoutMidea
drop table workouts
drop table programWorkouts
drop table posts
drop table postsComments
drop table Payment
drop table postsImages
drop table postsLikes
drop table postsShares
drop table program
drop table traineeprogram
drop table trainee
drop table coach
drop table commentLikes
drop table images
drop table inbodies*/

/*ALTER TABLE appUser
ADD FOREIGN KEY (PhotoID) REFERENCES images(imageId);
*/
/*
create table coachs(
coachId int primary key,
CategoryName varchar(20),
 FOREIGN KEY (coachId) REFERENCES users(userId)
)*/
----------------------------------------
/*
create table trainees(
traineeId int primary key,
target varchar(20),
cardNumber int , 
 FOREIGN KEY (traineeId) REFERENCES users(userId)
)*/

--------------------------------------------------------------------------
--any photo(post,profile,...)
/*create table images(
imageId int primary key identity(1,1),
imgSource varchar(100),
)*/
------------------------------------------
/*create table postsImages(
postId int,
imageId int,
 FOREIGN KEY (postId) REFERENCES posts(postId),
 /*FOREIGN KEY (imageId) REFERENCES images(imageId),*/
 primary key(postId,imageId)
)*/