import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-alert-button',
  templateUrl: './generic-alert-button.component.html',
  styleUrls: ['./generic-alert-button.component.scss']
})
export class GenericAlertButtonComponent implements OnInit {

  @Input()
  buttonTitle!: string;

  @Input()
  alertMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  // Nous utilisons le mot clef 'this' pour accéder aux propriétés du composant
  // En effet, il s'agit bien de la propriété du composant et non d'un paramètre qu'on lui passerait
  onClick() {
    alert(this.alertMessage);
  }



}
