import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() quizScore: number;

  badGifsCount = 13;
  okayGifsCount = 8;
  goofGifsCount = 14;

  constructor() { }

  ngOnInit() {
    if(this.quizScore) {
      this.getGif(this.quizScore);
    }
  }

  getGif(score) {
    switch (score) {
      case 'bad':
        return '/assets/gifs/bad/bad-' + this.getRandomNum(score) + '.gif';
      case 'okay':
        return '/assets/gifs/okay/okay-' + this.getRandomNum(score) + '.gif';
      case 'good':
        return '/assets/gifs/good/good-' + this.getRandomNum(score) + '.gif';
      default:
        return '/assets/gifs/okay/okay-' + this.getRandomNum('okay') + '.gif';
    }
  }

  getRandomNum(score) {
    switch (score) {
      case 'bad':
        return Math.ceil(Math.random() * this.badGifsCount);
      case 'okay':
        return Math.ceil(Math.random() * this.okayGifsCount);
      case 'good':
        return Math.ceil(Math.random() * this.goofGifsCount);
      default:
        return Math.ceil(Math.random() * this.okayGifsCount);
    }
  }

}
