// Import du décorateur 'Component'
import { Component } from '@angular/core';

// Appel du décorateur @Component.
// C'est lui qui nous permet de préciser que notre classe est un composant. 
@Component({
    // On lui indiquera le nom que l'on donnera au 'sélecteur'. 
    // Le selecteur est le nom de la balise avec laquelle on doit appeler notre composant
  selector: 'app-root', // Ici, ce serait <app-root></app-root>
  // Le templateUrl nous permet d'aller récupérer le fichier html correspondant
  templateUrl: './app.component.html',
  // StyleUrls nous permet de récupérer la feuille de style de notre composant
  // Il s'agit bien d'un tableau, ce qui implique que l'on puisse avoir plusieurs feuilles de style.
  styleUrls: ['./app.component.scss']
})

// Ensuite, la  classe AppComponent est créée.
// Pour le moment, elle ne contient qu'un title.
export class AppComponent {
  title = 'demoAngular';
}
