import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { trigger,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *',
          animate('500ms', keyframes([
                style({transform: 'scale(0.01)', offset: 0}),
                style({transform: 'scale(0.93)', offset: 0.25}),
                style({transform: 'scale(0.97)', offset: 0.50}),
                style({transform: 'scale(0.95)', offset: 0.75}),
                style({transform: 'scale(1)', offset: 1}),
              ])
          ))]),
  ]
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
