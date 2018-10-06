import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  count = 3;
  initialPause = true;

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    this.pauseForCountdown();
  }

  countdown() {
    this.initialPause = false;
    setInterval(() => {
      if( this.count > 1) {
        this.count -= 1;
      } else {
        this.router.navigate(['/quiz']);
      }
    }, 1000);
  }

  pauseForCountdown(){
    setTimeout(() => {
      this.countdown();
    }, 600);
  }

}
