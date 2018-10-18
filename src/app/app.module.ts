import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButton, MatCard, MatToolbar, MatRippleModule, MatIcon, MatToolbarRow, MatChipList, MatChip, MatCardHeader,
  MatCardTitle, MatCardSubtitle, MatCardContent, MatDivider, MatBadge, MatProgressBar, MatTable, MatHeaderRowDef,
  MatHeaderRow, MatRow, MatRowDef, MatDialogModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule,
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ModePickComponent } from './mode-pick/mode-pick.component';
import { CountdownComponent } from './countdown/countdown.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './info/info.component';
import {ModeService} from './shared/mode.service';
import { ScoreComponent } from './quiz/score/score.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';
import { HighScoresComponent } from './high-scores/high-scores.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {Ng2CompleterModule} from 'ng2-completer';
import { HighScoreDialogComponent } from './quiz/high-score-dialog/high-score-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MatToolbar,
    MatCard,
    MatButton,
    HeaderComponent,
    MatIcon,
    MatToolbarRow,
    ModePickComponent,
    MatChipList,
    MatChip,
    CountdownComponent,
    QuizComponent,
    QuestionComponent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatDivider,
    MatBadge,
    InfoComponent,
    ScoreComponent,
    MatProgressBar,
    MatTable,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    HighScoresComponent,
    HighScoreDialogComponent,
  ],
  entryComponents: [HighScoreDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRippleModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    ModeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
