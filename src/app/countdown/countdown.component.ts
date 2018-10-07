import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

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
    window['countdownInterval'] = setInterval(() => {
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
    }, 300);
  }

  ngOnDestroy() {
    window.clearInterval(window['countdownInterval']);
  }

}
