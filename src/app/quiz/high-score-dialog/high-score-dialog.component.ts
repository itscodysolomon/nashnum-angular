import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface DialogData {
  quizTime: number;
  date: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-high-score-dialog',
  templateUrl: './high-score-dialog.component.html',
  styleUrls: ['./high-score-dialog.component.scss']
})
export class HighScoreDialogComponent {
  initialsFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3),
    Validators.pattern(/^[a-zA-Z]*$/),
  ]);
  highScoreForm = new FormGroup({
    initials: this.initialsFormControl
  });
  matcher = new MyErrorStateMatcher();
  hideForm = false;
  highScoreSubmission = {};
  highScoresCollection: AngularFirestoreCollection<object>;

  constructor(
      public dialogRef: MatDialogRef<HighScoreDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private router: Router,
      db: AngularFirestore) {
    this.highScoresCollection = db.collection('times');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  viewHighScores() {
    this.dialogRef.close();
    this.router.navigate(['/high-scores']);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createHighScoreSubmission();
    this.postSubmission();
    this.hideForm = true;
  }

  createHighScoreSubmission() {
    this.highScoreSubmission['date'] = this.data['date'];
    this.highScoreSubmission['time'] = this.data['quizTime'];
    this.highScoreSubmission['user'] = this.highScoreForm.value.initials.toUpperCase();
  }

  postSubmission() {
    this.highScoresCollection.add(this.highScoreSubmission);
  }

}
