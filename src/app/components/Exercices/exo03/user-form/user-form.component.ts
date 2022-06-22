import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  users: any[] = [
    {
      nom: 'Norris',
      prenom: 'Chuck',
      email: 'chuck.norris@dieu.com',
      telephones: ['0123456789', '0123456789'],
      entreprise: 'GOD & Cie',
    },
  ];

  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [ Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required ]],
    // On déclare ici un tableau de FormArray
    // Dans lequel on ajoute un control pour un téléphone
    telephones: this.formBuilder.array([
      this.formBuilder.control('', [Validators.minLength(10), Validators.required]),
    ]),
    entreprise: ['', [Validators.minLength(2), Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }
  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
    }
  }
  public get form() {
    return this.userForm.controls;
  }

// Getter pour accéder à la liste des téléphones
  public get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }
  // Méthode pour ajouter un control de téléphone
  // La méthode va push un control de téléphone dans le tableau 'téléphones'
  public addTelephone(): void {
    this.telephones.push(this.formBuilder.control('', [Validators.minLength(10), Validators.required]));
  }
  // Méthode pour supprimer un control de téléphone
  // On retire le dernier élément de l'index
  // NB le compte commence à 1, l'index commence à 0 !
  public removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }

}
