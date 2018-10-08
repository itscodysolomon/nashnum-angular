import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { KEYS } from '../../shared/default-keys';
import { trigger,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
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
    trigger('wrong', [
      transition('void => *',
          animate('500ms', keyframes([
                style({transform: 'scale(.01)', offset: 0}),
                style({transform: 'scale(1)', offset: .14}),
                style({transform: 'translateX(-3px)', offset: 0.15}),
                style({transform: 'translateX(3px)', offset: 0.25}),
                style({transform: 'translateX(-2px)', offset: 0.45}),
                style({transform: 'translateX(3px)', offset: 0.65}),
                style({transform: 'translateX(-2px)', offset: 0.85}),
                style({transform: 'translateX(0px)', offset: 1.0}),
              ])
          ))]),
    trigger('right', [
      transition('void => *',
          animate('500ms', keyframes([
                style({transform: 'scale(.01)', offset: 0}),
                style({transform: 'scale(1)', offset: .19}),
                style({transform: 'scale(1.1) rotate(3deg)', offset: 0.20}),
                style({transform: 'scale(0.97)', offset: 0.40}),
                style({transform: 'scale(0.99) rotate(-3deg)', offset: 0.60}),
                style({transform: 'scale(1.05)', offset: 0.80}),
                style({transform: 'scale(1)', offset: 1}),
              ])
          ))])
  ]
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Output() answer = new EventEmitter<boolean>();
  @Output() newQuestion = new EventEmitter<boolean>();

  defaultKeys = KEYS;
  questionKey = this.setQuestionKey();
  questionChoices = [];
  correctAnswer: string;
  answerNumber: number;
  isAnswerCorrect = false;
  isIndicatingAnswer = false;
  areChoicesDisabled = false;
  timer = 3000;

  constructor() { }

  ngOnInit() {
    this.setAnswerChoices();
    this.setCorrectAnswer();
    this.setTimer();
  }

  setQuestionKey() {
    let randomNumber = Math.floor((Math.random() * 6));
    return this.defaultKeys[randomNumber];
  }

  setAnswerChoices() {
    const tempChoices = this.shuffleSetKey(this.questionKey);
    for (let i = 0; i < 4; i++) {
      this.questionChoices.push(tempChoices[i]);
    }
  }

  setCorrectAnswer() {
    let randomNumber = Math.floor((Math.random() * 4));
    this.correctAnswer = this.questionChoices[randomNumber];
    this.setAnswerNumber();
  }

  setAnswerNumber() {
    this.answerNumber = this.questionKey.indexOf(this.correctAnswer) + 1;
  }

  shuffleSetKey(originalKeyArray) {
    let shuffledKey: Array<any> = originalKeyArray.slice(0);
    for (let i = shuffledKey.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledKey[i], shuffledKey[j]] = [shuffledKey[j], shuffledKey[i]];
    }
    return shuffledKey;
  }

  checkAnswer(choice) {
    this.clearTimer();
    this.indicateAnswer(this.questionKey.indexOf(choice) + 1 === this.answerNumber);
  }

  indicateAnswer(answer) {
    this.isAnswerCorrect = answer;
    this.isIndicatingAnswer = true;
    this.areChoicesDisabled = true;
    setTimeout(() => {
        this.nextQuestion(answer);
        this.isIndicatingAnswer = false;
        this.areChoicesDisabled = false;
    }, 1400);
  }

  nextQuestion(answer) {
      this.answer.emit(answer);
      this.newQuestion.emit();
  }

  setTimer() {
      window['timerInterval'] = setInterval(() => {
          if(this.timer > 0) {
              this.timer = this.timer - 30;
          } else {
              this.clearTimer();
              setTimeout(() => {
                  this.checkAnswer(false);
              }, 190);
          }
      }, 30);
  }

  clearTimer() {
      window.clearInterval(window['timerInterval']);
  }

  ngOnDestroy() {
    this.clearTimer();
  }

}
