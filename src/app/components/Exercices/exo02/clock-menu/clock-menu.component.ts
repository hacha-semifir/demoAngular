import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-menu',
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.scss']
})
export class ClockMenuComponent implements OnInit {
   // Liste des timezones disponibles
  // On pourra toujours en ajouter autant qu'on le souhaite sans avoir à modifier notre composant.
  // NB : Dans un vrai projet, les data ne sont pas codées en dur comme ça, mais sont récupérées via un service sur une API par exemple.
  timezones: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal',
    'Europe/Lisbon'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setTime(timeZone: string) : string {
    // Récupération de l'heure actuelle dans la timezone sélectionnée
    const date = new Date().toLocaleString('fr-FR', {timeZone: timeZone});
    // Une fois traité par la ligne au dessus, l'objet date ressemble à ça :
    // 06/05/2022 14:00:00. On utilise split pour séparer les différentes parties de la date avec le caractère 'espace' comme délimiteur.
    // On peut ensuite récupérer la deuxième partie du tableau, qui correspond à l'heure.
    const time = date.split(' ')[1];
    // Partie supplémentaire qui permet de mettre à jour l'horloge à chaque seconde
    // C'est pas la meilleure manière de faire, mais ça reste OK.
    setInterval(this.setTime, 1000);
    return time;
  }
}
