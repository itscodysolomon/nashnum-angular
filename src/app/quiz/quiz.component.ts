import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

  answers = [];
  isQuestion = true;

  constructor(
      private router: Router
  ) {
  }

  ngOnInit() {

  }

  pushAnswer(answer) {
    this.answers.push(answer ? 1 : 0);
  }

  loadNewQuestion() {
    console.log('loading question');
    this.isQuestion = false;
    setTimeout(() => {
      this.isQuestion = true;
    }, 400);
  }

  ngOnDestroy() {
    console.log(this);
  }

}
