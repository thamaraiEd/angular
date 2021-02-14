import { Component, OnInit } from '@angular/core';
import { Fans } from '../fans';
import { Fanss } from '../mock-fans';
// type NewType = Fanss;

// import { NgpSortModule } from "ngp-sort-pipe";


@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})

export class FansComponent implements OnInit {
fansname = Fanss; // list values from the fans.component.ts
selectedFan: Fans;

/*fansname: Fans = { hardcoded
  id: 1,
  name: 'Tom'
};*/
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(fan: Fans): void {
    this.selectedFan = fan;
  }
}
