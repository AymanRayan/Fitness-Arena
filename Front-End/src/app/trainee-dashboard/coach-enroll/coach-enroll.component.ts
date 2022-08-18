import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BundleService } from 'src/app/services/bundle/bundle.service';
import { LoginService } from 'src/app/services/login.service';
import { TraineeBundle } from 'src/app/_models/trainee-bundle';

@Component({
  selector: 'app-coach-enroll',
  templateUrl: './coach-enroll.component.html',
  styleUrls: ['./coach-enroll.component.css'],
})
export class CoachEnrollComponent implements OnInit {
  coachid: number = 0;
  userId: number = this.log.userID();
  bundles: any[] = [];
  constructor(
    public bundleService: BundleService,
    public ar: ActivatedRoute,
    public log: LoginService,
    public route: Router
  ) {}

  commentenroll: boolean = false;
  ngOnInit(): void {
    this.ar.params.subscribe((p) => {
      this.coachid = Number(p['id']);
    });
    this.bundleService.getCoachbundle(this.coachid).subscribe((a) => {
      console.log(a);
      this.bundles = a;
    });
  }
  traineebundle: TraineeBundle = new TraineeBundle();
  enroll(bundleId: number) {
    this.bundleService.hasBundle(this.log.userID()).subscribe((a) => {
      if (a == true) {
        document.getElementById("xk")?.click();

      }
      if (a == false) {
        this.traineebundle.bundleId = bundleId;
        this.traineebundle.traineeId = this.userId;

        this.bundleService.enrollTrainee(this.traineebundle).subscribe((a) => {
          console.log(a);
        });
        this.route.navigateByUrl('/confimEnroll');
      }
    });
  }
  unsbscribe() {}
}
