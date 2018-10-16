import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() quizScore: number;
  @Input() quizTime: number;

  public times: Observable<any[]>;
  private timesCollection: AngularFirestoreCollection<any[]>;

  badGifsCount = 13;
  okayGifsCount = 8;
  goofGifsCount = 14;
  gifChosen = false;

  constructor(db: AngularFirestore) {
    this.timesCollection = db.collection('times', ref => ref.orderBy('time', 'asc').limit(30));
    this.times = this.timesCollection.valueChanges();
  }

  ngOnInit() {
    if(this.quizScore) {
      if (this.gifChosen) {
        this.getGif(this.quizScore);
      }
    }
    this.isHighScore();
  }

  getGif(score) {
    this.gifChosen = true;
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

  isHighScore() {
    // if (this.getLastHighScoreTime()) {
    //   console.log('high score');
    // }
  }

  getLastHighScoreTime() {
    console.log('hey');
    this.times.subscribe(res => {
      if (this.quizTime > (res[res.length - 1]['time'])) {
        console.log('true');
        console.log(this.quizTime);
        console.log(res[res.length - 1]['time']);
        return true;
      }
    });
  }

}
