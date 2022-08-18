import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.css']
})
export class HomenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     this.load();

  }
  load(){
    let smoke= document.getElementById('smoke');
    let smokeup= document.getElementById('smokeup');
    let btn= document.getElementById('FirstBtn');
    let coachid= document.getElementById('coachid');
    let header = document.querySelector('nav');
    let btn2= document.getElementById('btn2');
    let square = document.getElementById('square');
    let text= document.getElementById('text');
    let sign_in_btn = document.querySelector("#sign-in-btn");
    let sign_up_btn = document.querySelector("#sign-up-btn");
    let container = document.querySelector(".container");

    sign_up_btn?.addEventListener("click", () => {
     container?.classList.add("sign-up-mode");
    });

    sign_in_btn?.addEventListener("click", () => {
     container?.classList.remove("sign-up-mode");
    });
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        smoke?.setAttribute("style" , `left: ${value * 0.5 }px;`);
        smokeup?.setAttribute("style",`top:${value * 0.3}px;`);
        coachid?.setAttribute("style",`top:${value * 0}px;`);
        btn?.setAttribute("style",`margin-top:${value * 0.5}px;`);
        header?.setAttribute("style",`top:${value * 0.9}px;`);
        btn2?.setAttribute("style",`margin-right:${value * 4}px;`);
        square?.setAttribute("style",`top:${value * -0.3}px;`);
        text?.setAttribute("style",`margin-top:${value * 0.6}px;`)
    })
  }

}
