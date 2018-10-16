import {Component, OnInit} from '@angular/core';
import {ModeService} from '../shared/mode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  answers = [];
  isQuestion = true;
  mode: string;
  questionMax = 2;
  showQuestionCount = true;
  showScore = false;
  quizScore: number;
  overallTime = 0;

  constructor(
      private modeService: ModeService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.mode = this.modeService.mode;
  }

  pushAnswer(answer) {
    this.answers.push(answer ? 1 : 0);
  }

  loadNewQuestion() {
    this.isQuizDone();
    if (!this.showScore) {
      this.isQuestion = false;
      setTimeout(() => {
        this.isQuestion = true;
      }, 400);
    }
  }

  isQuizDone() {
    if (this.answers.length === this.questionMax && this.mode === 'quiz') {
      this.loadQuizScore();
    }
  }

  loadQuizScore() {
    this.isQuestion = false;
    this.showScore = true;
    this.quizScore = this.getQuizScore();
  }

  getQuizScore() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Math.floor((this.answers.reduce(reducer) / this.questionMax) * 100);
  }

  displayOverallTime() {
      return (this.overallTime / 1000) + ' seconds';
  }

}
