import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  templateUrl: './liste-filtre.component.html',
  styleUrls: ['./liste-filtre.component.scss']
})
export class ListeFiltreComponent implements OnInit {

   // Création d'une liste de noms :
   personnes : string[] = ['Saul Hudson', 'David Bowie', 'Stevie Nicks', 'Jimi Hendrix', 'Johnny Halliday'];

  constructor() { }

  ngOnInit(): void {
  }

}
