import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  // On déclare ici notre liste de prénoms
  prenoms: string[] = ["Carlos", 'Johnny Halliday', 'Michel Polnareff'];

  constructor() { }

  ngOnInit(): void {
  }

}
