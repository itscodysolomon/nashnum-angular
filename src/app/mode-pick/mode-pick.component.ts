import { Component, OnInit } from '@angular/core';
import {ModeService} from '../shared/mode.service';

@Component({
  selector: 'app-mode-pick',
  templateUrl: './mode-pick.component.html',
  styleUrls: ['./mode-pick.component.scss']
})
export class ModePickComponent implements OnInit {
  constructor(
      private mode: ModeService
  ) { }

  ngOnInit() {
  }

  setMode(mode) {
    this.mode.mode = mode;
  }

}
