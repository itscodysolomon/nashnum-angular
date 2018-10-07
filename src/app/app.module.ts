import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButton, MatCard, MatToolbar, MatRippleModule, MatIcon, MatToolbarRow, MatChipList, MatChip, MatCardHeader,
  MatCardTitle, MatCardSubtitle, MatCardContent, MatDivider, MatBadge,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRippleModule,
    AppRoutingModule,
  ],
  providers: [
    ModeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
