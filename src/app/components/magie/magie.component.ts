import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magie',
  templateUrl: './magie.component.html',
  styleUrls: ['./magie.component.scss']
})
export class MagieComponent implements OnInit {
   // Déclaration d'un bool avec une valeur par défaut à true
   hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // Méthode pour modifier le bool en inversant sa valeur
  toggle() {
    this.hidden = !this.hidden;
  }
}
