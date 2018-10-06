import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {ModePickComponent} from './mode-pick/mode-pick.component';
import {CountdownComponent} from './countdown/countdown.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
    { path: '', redirectTo: '/mode', pathMatch: 'full' },
    { path: 'quiz', component: QuizComponent },
    { path: 'mode', component: ModePickComponent },
    { path: 'countdown', component: CountdownComponent },
    { path: 'info', component: InfoComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}