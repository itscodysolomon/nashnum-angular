import { Component, OnInit } from '@angular/core';
import { KEYS } from '../shared/default-keys';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  keys = KEYS;
  displayedColumns: string[] = ['Key', '1', '2m', '3m', '4', '5', '6m', '7º'];

  constructor() { }

  ngOnInit() {
  }

}
