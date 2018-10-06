import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-pick',
  templateUrl: './mode-pick.component.html',
  styleUrls: ['./mode-pick.component.scss']
})
export class ModePickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('mode init')
  }

}
