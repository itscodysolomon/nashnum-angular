import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {MatDialog} from '@angular/material';
import {HighScoreDialogComponent} from '../high-score-dialog/high-score-dialog.component';

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

  badGifsCount = 12;
  okayGifsCount = 8;
  goodGifsCount = 14;
  goodGifs = [];
  okayGifs = [];
  badGifs = [];
  badGif: string;
  okayGif: string;
  goodGif: string;

  initials: string;
  dialogOpened = false;
  highScoreLimit = 30;

  constructor(db: AngularFirestore, public dialog: MatDialog) {
    this.timesCollection = db.collection('times', ref => ref.orderBy('time', 'asc').limit(this.highScoreLimit));
    this.times = this.timesCollection.valueChanges();
  }

  ngOnInit() {
    this.fillGifArrays();
    this.setGifs();
    this.getLastHighScoreTime();
  }

  fillGifArrays() {
    for (let i = 0; i < this.goodGifsCount; i++) {
      this.goodGifs.push('/assets/gifs/good/good-' + (i + 1) + '.gif');
    }
    for (let i = 0; i < this.okayGifsCount; i++) {
      this.okayGifs.push('/assets/gifs/okay/okay-' + (i + 1) + '.gif');
    }
    for (let i = 0; i < this.badGifsCount; i++) {
      this.badGifs.push('/assets/gifs/bad/bad-' + (i + 1) + '.gif');
    }
  }

  setGifs() {
        this.badGif = this.badGifs[this.getRandomNum('bad')];
        this.okayGif = this.okayGifs[this.getRandomNum('okay')];
        this.goodGif = this.goodGifs[this.getRandomNum('good')];
  }

  getRandomNum(score) {
    switch (score) {
      case 'bad':
        return Math.ceil(Math.random() * this.badGifsCount);
      case 'okay':
        return Math.ceil(Math.random() * this.okayGifsCount);
      case 'good':
        return Math.ceil(Math.random() * this.goodGifsCount);
      default:
        return Math.ceil(Math.random() * this.okayGifsCount);
    }
  }

  isHighScore() {
    console.log('hey2' + this.quizTime + this.quizScore);
    if (this.quizScore == 100 && !this.dialogOpened) {
      this.openDialog();
    }
  }

  getLastHighScoreTime() {
    console.log('hey' + this.quizTime + this.quizScore);
    this.times.subscribe(res => {
      if ( res.length < this.highScoreLimit || (this.quizTime < (res[res.length - 1]['time']))) {
        this.isHighScore();
      }
    });
  }

  openDialog(): void {
    this.dialogOpened = true;
    this.dialog.open(HighScoreDialogComponent, {
      width: '250px',
      disableClose: true,
      data: {
        quizTime: this.quizTime,
        date: new Date(),
      }
    });
  }

}
