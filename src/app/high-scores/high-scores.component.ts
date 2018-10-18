import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as moment from 'moment';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss']
})
export class HighScoresComponent implements OnInit {

  public times: Observable<any[]>;
  private timesCollection: AngularFirestoreCollection<any[]>;

  loading = true;

  settings = {
    hideSubHeader: true,
    columns: {
      rank: {
        title: 'Rank',
        editable: false,
        sort: false,
      },
      score: {
        title: 'Score',
        editable: false,
        sort: false,
      },
      time: {
        title: 'Time',
        editable: false,
        sort: false,
      },
      user: {
        title: 'Name',
        editable: false,
        sort: false,
      },
      date: {
        title: 'Date',
        editable: false,
        sort: false,
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: false,
    }
  };

  data = [];

  constructor(db: AngularFirestore) {
    this.timesCollection = db.collection('times', ref => ref.orderBy('time', 'asc').limit(30));
    this.times = this.timesCollection.valueChanges();
  }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.times.subscribe( res => {
      res.map((item, index) => {
        item['rank'] = index + 1;
        item['score'] = 100;
        item['time'] = this.formatTime(item['time']);
        item['date'] = moment.unix(item['date']['seconds']).format('L');
      },
      this.loadTableData(res));
    });
  }

  formatTime(time) {
    return (time / 1000) + ' S';
  }

  loadTableData(data) {
    this.data = data;
    this.loading = false;
  }

}
