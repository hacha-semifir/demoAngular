import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidder',
  templateUrl: './hidder.component.html',
  styleUrls: ['./hidder.component.scss']
})
export class HidderComponent implements OnInit {

  hidden: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hidden = !this.hidden;
  }

}
