import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-entry-card',
  templateUrl: './time-entry-card.component.html',
  styleUrls: ['./time-entry-card.component.css']
})
export class TimeEntryCardComponent implements OnInit {
  @Input() entry: any;

  constructor() { }

  ngOnInit() {
  }

}
