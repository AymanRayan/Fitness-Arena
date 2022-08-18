import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicExploreCoachesComponent } from './home/public-explore-coaches/public-explore-coaches.component';
import { HomenavComponent } from './home/homenav/homenav.component';
import { LoginComponent } from './home/login/login.component';
import { RegiCoachComponent } from './home/regi-coach/regi-coach.component';
import { RegiTraineeComponent } from './home/regi-trainee/regi-trainee.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProgAddNewComponent } from './programs/prog-add-new/prog-add-new.component';
import { ProgEditComponent } from './programs/prog-edit/prog-edit.component';
import { ProgShowAllComponent } from './programs/prog-show-all/prog-show-all.component';
import { ProgshowOneComponent } from './programs/progshow-one/progshow-one.component';
import { AuthGuard } from './services/auth.guard';
import { TraineExploreCoachesPageComponent } from './trainee-dashboard/traine-explore-coaches-page/traine-explore-coaches-page.component';
import { TraineInbodyPageComponent } from './trainee-dashboard/traine-inbody-page/traine-inbody-page.component';
import { TraineeAddInbodyPageComponent } from './trainee-dashboard/trainee-add-inbody-page/trainee-add-inbody-page.component';
import { TraineeContactCoachPageComponent } from './trainee-dashboard/trainee-contact-coach-page/trainee-contact-coach-page.component';
import { TraineeEditProfilePageComponent } from './trainee-dashboard/trainee-edit-profile-page/trainee-edit-profile-page.component';
import { TraineeHomePageComponent } from './trainee-dashboard/trainee-home-page/trainee-home-page.component';
import { TraineeProfilePageComponent } from './trainee-dashboard/trainee-profile-page/trainee-profile-page.component';
import { TraineeProgramPageComponent } from './trainee-dashboard/trainee-program-page/trainee-program-page.component';
import { ShowAllComponent } from './trainees/show-all/show-all.component';
import { TraineeDetailsComponent } from './trainees/trainee-details/trainee-details.component';
import { CoachbundleComponent } from './home/coachbundle/coachbundle.component';
import { LoginguardGuard } from './services/loginguard.guard';
import { TraineeProgramDetailsComponent } from './trainee-dashboard/trainee-program-details/trainee-program-details.component';
import { CoachEnrollComponent } from './trainee-dashboard/coach-enroll/coach-enroll.component';
import { ConfirmEnrollmentComponent } from './trainee-dashboard/confirm-enrollment/confirm-enrollment.component';

const routes: Routes = [
  //all users
  { path: 'signin', component: LoginComponent ,
    canActivate : [LoginguardGuard]
  },
  { path: 'home' , component : HomenavComponent ,
    canActivate : [LoginguardGuard]
  },
  { path: 'signup', component : RegiTraineeComponent ,
    canActivate : [LoginguardGuard]
  },
  { path : 'signupcoash', component : RegiCoachComponent ,
    canActivate : [LoginguardGuard]
  },
  { path: '' , component : HomenavComponent ,
    canActivate : [LoginguardGuard]
  },
  { path : 'ourcoaches',component: PublicExploreCoachesComponent ,
    canActivate : [LoginguardGuard]
  },
  { path: 'coachbundle/:id', component : CoachbundleComponent ,
    canActivate : [LoginguardGuard]
  },

  //coach dash board
  { path: 'coachhome', component: TraineeHomePageComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'profile/:id', component: ProfileComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'profile/edit/:id', component: EditProfileComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'clients', component: ShowAllComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'clients/:id', component: TraineeDetailsComponent,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'programs', component: ProgShowAllComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
   }
  },
  { path: 'programs/addnew', component: ProgAddNewComponent ,
    canActivate : [AuthGuard] ,
    data: {
    role: 'coach'
    }
  },
  { path: 'programs/:id', component: ProgshowOneComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'coach'
  }
  },
  { path: 'programs/edit/:id', component: ProgEditComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'coach'
  }
  },
 
  //trainee Dash board
  { path: 'trainee/:id', component: TraineeProfilePageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'traineehome', component: TraineeHomePageComponent
  },
  { path: 'traineeprogram', component: TraineeProgramPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'contactcoach', component: TraineeContactCoachPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'contact', component: TraineeContactCoachPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'coach'
  }
  },
  { path: 'Traineeinbody', component: TraineInbodyPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'Explorecoaches', component: TraineExploreCoachesPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'addnewinbody', component: TraineeAddInbodyPageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },
  { path: 'traineeEditprofile/:id', component: TraineeEditProfilePageComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },{ path: 'coachenroll/:id', component: CoachEnrollComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },{ path: 'traineeProgramDetails/:id', component: TraineeProgramDetailsComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },{ path: 'confimEnroll', component: ConfirmEnrollmentComponent ,
  canActivate : [AuthGuard] ,
  data: {
  role: 'trainee'
  }
  },

  //
  //error not found
  {path:'**' , component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
